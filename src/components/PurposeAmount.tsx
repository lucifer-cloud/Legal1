'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { TextField, useField, useFormModified, useWatchForm } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'

const PurposeAmount: TextFieldClientComponent = ({ path, field, ...props }) => {
  const initialValueRef = useRef({ savedPurpose: null, savedCost: null })
  const { setValue } = useField({ path }) // PurposeAmount field
  const formModified = useFormModified()
  const selectedPurpose = useWatchForm().getSiblingData(path)
  const currentPurpose = selectedPurpose?.purpose
  const currentCost = selectedPurpose?.purposeAmount

  const resetCostPerPurpose = useCallback(
    async (id: number) => {
      try {
        const response = await fetch(`/api/purpose/${id}`)
        const data = await response.json()
        if (data?.cost !== undefined) setValue(String(data.cost))
      } catch (error) {
        console.error('Error fetching procedure cost:', error)
      }
    },
    [setValue],
  )

  // Store initial values only once
  useEffect(() => {
    initialValueRef.current = {
      savedPurpose: currentPurpose,
      savedCost: currentCost,
    }
  }, [formModified])

  // Reset cost per purpose if currentPurpose changes and initial value hasn't been set
  useEffect(() => {
    if (!currentPurpose) {
      initialValueRef.current = {
        savedPurpose: null,
        savedCost: null,
      }
      setValue(null)
    }
    if (currentPurpose && !initialValueRef.current.savedPurpose) {
      resetCostPerPurpose(currentPurpose)
    }
  }, [currentPurpose])

  return <TextField {...props} path={path} field={field} readOnly={field.admin?.readOnly} />
}

export default PurposeAmount
