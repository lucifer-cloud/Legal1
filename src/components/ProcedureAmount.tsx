'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { TextField, useField, useFormModified, useWatchForm } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'

const ProcedureAmount: TextFieldClientComponent = ({ path, field, ...props }) => {
  const initialValueRef = useRef({ savedProcedure: null, savedCost: null })
  const { setValue } = useField({ path })
  const formModified = useFormModified()
  const selectedProcedure = useWatchForm().getSiblingData(path)
  const currentProcedure = selectedProcedure?.procedure
  const currentCost = selectedProcedure?.cost
  const resetCostPerProcedure = useCallback(
    async (id: number) => {
      try {
        const response = await fetch(`/api/procedure/${id}`)
        const data = await response.json()
        if (data?.cost !== undefined) setValue(String(data.cost))
      } catch (error) {
        console.error('Error fetching procedure cost:', error)
      }
    },
    [setValue],
  )
  useEffect(() => {
    initialValueRef.current = {
      savedProcedure: currentProcedure,
      savedCost: currentCost,
    }
  }, [formModified])

  useEffect(() => {
    if (!currentProcedure) {
      initialValueRef.current = {
        savedProcedure: null,
        savedCost: null,
      }
      setValue(null)
    }
    if (currentProcedure && !initialValueRef.current.savedProcedure) {
      resetCostPerProcedure(currentProcedure)
    }
  }, [currentProcedure])

  return <TextField {...props} path={path} field={field} readOnly={field.admin?.readOnly} />
}

export default ProcedureAmount
