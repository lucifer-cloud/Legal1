'use client'
import React, { useState, useCallback } from 'react'
import { Button, Modal, useDocumentInfo, useModal } from '@payloadcms/ui'
import { MinimalTemplate } from '@payloadcms/next/templates'
import Image from 'next/image'
import './compareImages.css'

interface PersonImage {
  url: string
  filename: string
}

interface Appointment {
  id: string
  personImage: PersonImage[] | null // Added null check for personImage
  appointmentDate: string
}

// Function to fetch appointment data
const getAppointmentsData = async (id: string | number): Promise<Appointment[]> => {
  try {
    const response = await fetch(`/api/patients/${id}?depth=1&draft=false&locale=undefined`)
    const data = await response.json()
    return data.appointments || []
  } catch (error) {
    console.error('Error fetching patient data:', error)
    return []
  }
}

// Function to format date
const getDate = (val: string): string => {
  if (!val) return ''
  const now = new Date(val)
  return now.toLocaleDateString('en-GB') // Formats as DD/MM/YYYY
}

const CompareImages: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(false)
  const { id } = useDocumentInfo()

  const { toggleModal } = useModal()
  const modalSlug = 'compareImages'

  const fetchData = useCallback(async () => {
    setLoading(true)
    setAppointments([]) // Clear old data before fetching new ones

    if (!id) {
      setLoading(false)
      return
    }

    const data = await getAppointmentsData(id)
    setAppointments(data)
    setLoading(false)
  }, [id])

  return (
    <>
      <Button
        onClick={() => {
          fetchData()
          toggleModal(modalSlug)
        }}
      >
        Compare Images
      </Button>

      <Modal slug={modalSlug} className="delete-document">
        <MinimalTemplate
          className="confirmation-modal__wrapper delete-document__wrapper"
          width="wide"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              height: 0,
            }}
          >
            <h4 style={{ paddingBottom: '10px', paddingLeft: '10px' }}>Appointment Images</h4>
            <Button
              onClick={() => toggleModal(modalSlug)}
              icon="x"
              iconPosition="right"
              buttonStyle="icon-label"
              iconStyle="without-border"
            />
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>Loading images...</p>
            </div>
          ) : (
            <ul style={{ listStyle: 'none', height: '80vh', overflowY: 'auto', padding: 0 }}>
              {appointments.map((appointment) => (
                <li key={appointment.id} style={{ marginBottom: '20px' }}>
                  <div>
                    {/* Safely handle null/undefined personImage */}
                    {appointment.personImage?.map((person, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'inline-block',
                          textAlign: 'center',
                          position: 'relative',
                          width: '100%',
                          background: 'transparent',
                          padding: '0 10px',
                        }}
                      >
                        <Image
                          src={person.url}
                          alt={person.filename}
                          loading="lazy"
                          layout="intrinsic"
                          width={500}
                          height={250}
                          style={{
                            objectFit: 'cover',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                        <p
                          style={{
                            position: 'absolute',
                            bottom: '5px',
                            left: '2%',
                            color: '#ff0000',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)',
                            fontSize: '10px',
                          }}
                        >
                          {getDate(appointment.appointmentDate)}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </MinimalTemplate>
      </Modal>
    </>
  )
}

export default CompareImages
