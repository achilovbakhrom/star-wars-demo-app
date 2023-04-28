import React from 'react'
import { Box, Divider, Paper } from '@mui/material'

import PersonDetailView from './PersonDetailView'
import usePersonDetail from '../../hooks/usePersonDetail'
import PersonDetailEdit from './PersonDetailEdit'
import PersonDetailLoading from './PersonDetailLoading'
import PersonDetailError from './PersonDetailError'
import PersonDetailHeader from './PersonDetailHeader'

const PersonDetailMain: React.FC = () => {
  usePersonDetail()
  return (
    <Box
      component={Paper}
      m={4}
      width={1000}
      borderRadius={3}
      overflow="hidden"
    >
      <PersonDetailHeader />
      <Divider />
      <PersonDetailLoading />
      <PersonDetailError />
      <PersonDetailView />
      <PersonDetailEdit />
    </Box>
  )
}

export default PersonDetailMain
