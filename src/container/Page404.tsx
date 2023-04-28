import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Page404NotFound: React.FC = () => (
  <Box
    p={3}
    component={Paper}
    display="flex"
    flexDirection="column"
    gap={4}
    alignItems="center"
  >
    <Typography fontSize={17}> Page 404 Not Found </Typography>
    <Link to="/" replace>
      {' '}
      Go to Home Page{' '}
    </Link>
  </Box>
)

export default Page404NotFound
