'use client'
import React, { useEffect } from 'react'
import { TextField, useField, useWatchForm } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'

const calculateDate = (date: string, val: number) => {
  const appointmentDate = new Date(date)
  const followUpDays = Number(val)

  if (isNaN(appointmentDate.getTime()) || isNaN(followUpDays)) return ''

  const prescriptionValidityVal = new Date(appointmentDate)
  let daysAdded = 0

  while (daysAdded < followUpDays) {
    prescriptionValidityVal.setDate(prescriptionValidityVal.getDate() + 1)
    if (prescriptionValidityVal.getDay() !== 0) daysAdded++
  }
  return prescriptionValidityVal.toLocaleDateString('en-GB') // UK format (dd/MM/yyyy)
}

const NextFollowupDate: TextFieldClientComponent = ({ path, field, ...props }) => {
  const { value, setValue } = useField({ path })
  const formWatch = useWatchForm()
  const { appointmentDate, followUpDay } = formWatch.getSiblingData(path)
  const calValue = calculateDate(appointmentDate, followUpDay)

  useEffect(() => {
    if (value !== calValue && appointmentDate && followUpDay != null) setValue(calValue)
  }, [appointmentDate, followUpDay])

  return <TextField {...props} path={path} field={field} readOnly={field.admin?.readOnly} />
}

export default NextFollowupDate
