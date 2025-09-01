export async function fetchIncomeData(tab, startDate = '', endDate = '') {
  try {
    let queryStartDate, queryEndDate

const getDayStart = (date) =>
  new Date(new Date(date).setUTCHours(0, 0, 0, 0)).toISOString()

const getDayEnd = (date) =>
  new Date(new Date(date).setUTCHours(23, 59, 59, 999)).toISOString()

if (tab === 'range') {
  queryStartDate = getDayStart(startDate)
  queryEndDate = getDayEnd(endDate)
} else {
  const today = new Date()

  if (tab === 'today') {
    queryStartDate = getDayStart(today)
    queryEndDate = getDayEnd(today)
  } else if (tab === 'month') {
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
    queryStartDate = getDayStart(monthStart)
    queryEndDate = getDayEnd(today)
  } else if (tab === 'year') {
    const yearStart = new Date(today.getFullYear(), 0, 1)
    queryStartDate = getDayStart(yearStart)
    queryEndDate = getDayEnd(today)
  }
}

    const appointmentsUrl = `/api/patients?dept=0&select[name]=true&select[createdAt]=true&select[appointments][purposeAmount]=true&select[appointments][appointmentDate]=true&select[appointments][procedures][procedureAmount]=true&where[appointments.appointmentDate][greater_than_equal]=${queryStartDate}&where[appointments.appointmentDate][less_than_equal]=${queryEndDate}&limit=5000`
    const res = await fetch(appointmentsUrl)
    if (!res.ok) throw new Error('Failed to fetch appointment data')
    const { docs: patients } = await res.json()

    const patientsUrl = `/api/patients?dept=0&select[name]=true&select[createdAt]=true&where[createdAt][greater_than_equal]=${queryStartDate}&where[createdAt][less_than_equal]=${queryEndDate}&limit=5000`
    const resPatients = await fetch(patientsUrl)
    if (!resPatients.ok) throw new Error('Failed to fetch patient data')
    const { docs: patientsData } = await resPatients.json()

    const data = {
      revenue: { total: 0, logs: [] },
      patients: { count: 0, logs: [] },
      appointments: { count: 0, logs: [] },
    }

    patientsData.forEach((patient) => {
      data.patients.count += 1
      data.patients.logs.push({ patientName: patient.name, appointmentDate: patient.createdAt })
    })

    patients.forEach((patient) => {
      patient.appointments.forEach((appointment) => {
        if (
      appointment.appointmentDate &&
      new Date(appointment.appointmentDate) >= new Date(queryStartDate) &&
      new Date(appointment.appointmentDate) <= new Date(queryEndDate)
    ){
        const totalAmount =
          parseFloat(appointment.purposeAmount || '0') +
          (appointment.procedures?.reduce(
            (sum, proc) => sum + parseFloat(proc.procedureAmount || '0'),
            0,
          ) || 0)
        data.revenue.total += totalAmount
        data.revenue.logs.push({
          patientName: patient.name,
          appointmentDate: appointment.appointmentDate,
          totalAmount,
        })
        data.appointments.count += 1
        data.appointments.logs.push({
          patientName: patient.name,
          appointmentDate: appointment.appointmentDate,
        })
      }
      })
    })

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      revenue: { total: 0, logs: [] },
      patients: { count: 0, logs: [] },
      appointments: { count: 0, logs: [] },
    }
  }
}
