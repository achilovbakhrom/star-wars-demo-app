import { Box } from '@mui/material'

import React from 'react'

import PersonListHeader from './PersonListHeader'
import PersonList from './PersonList'
import PersonListFilter from './PersonListFilter'

const PersonListMain: React.FC = () => (
  <Box mt={4} display="flex" justifyContent="center">
    <Box width={1000} display="flex" flexDirection="column" gap={1}>
      <PersonListHeader />
      <PersonListFilter />
      <PersonList />
    </Box>
  </Box>
)

export default PersonListMain
