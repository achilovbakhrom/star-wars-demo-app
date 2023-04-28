import { Box, Typography } from '@mui/material'
import React from 'react'
import usePersonDetailError from '../../hooks/usePersonDetailError'
import usePersonDetailLoading from '../../hooks/usePersonDetailLoading'

const PersonDetailError: React.FC = () => {
  const { error } = usePersonDetailError()
  const { isLoading } = usePersonDetailLoading()

  if (isLoading || !error) {
    return null
  }
  return (
    <Box p={2}>
      <Typography fontSize={14} color="red" align="center">
        {error}
      </Typography>
    </Box>
  )
}

export default PersonDetailError
