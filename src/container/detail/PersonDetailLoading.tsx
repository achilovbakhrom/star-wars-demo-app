import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import usePersonDetailLoading from '../../hooks/usePersonDetailLoading'

const PersonDetailLoading: React.FC = () => {
  const { isLoading } = usePersonDetailLoading()
  if (isLoading) {
    return (
      <Box
        display="flex"
        gap={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        <CircularProgress variant="indeterminate" /> <span>Loading...</span>
      </Box>
    )
  }
  return null
}

export default PersonDetailLoading
