import { Box } from '@mui/material'
import React from 'react'
import PersonDetailEditForm from '../../component/forms/PersonDetailEditForm'
import usePersonEdit from '../../hooks/usePersonDetailEdit'

type Props = {}

const PersonDetailEdit: React.FC<Props> = () => {
  const { person, isEditMode, onCancel, updatePerson } = usePersonEdit()

  if (person && isEditMode) {
    return (
      <Box p={2}>
        <PersonDetailEditForm
          value={person}
          onCancel={onCancel}
          onUpdate={(arg) => {
            updatePerson({ ...person, ...arg })
          }}
        />
      </Box>
    )
  }

  return null
}

export default PersonDetailEdit
