import React from 'react'
import { Box, Typography } from '@mui/material'

const DetailViewItem: React.FC<{
  title: string
  value: string | JSX.Element
}> = ({ title, value }) => (
  <Box>
    <Typography fontSize={14} color="#888">
      {title}
    </Typography>
    {typeof value === 'string' ? (
      <Typography fontSize={17} color="#555">
        {value}
      </Typography>
    ) : (
      value
    )}
  </Box>
)

export default DetailViewItem
