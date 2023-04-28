import { ArrowBackRounded, EditRounded, HomeRounded } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'

import userPersonDetailHeader from '../../hooks/usePersonDetailHeader'

const PersonDetailHeader: React.FC = () => {
  const { goBack, goToUpdateMode, goToHome, isEditMode } =
    userPersonDetailHeader()
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      alignItems="center"
      sx={{ backgroundColor: '#fafafa' }}
      minHeight={56}
      pl={1}
      pr={2}
    >
      {!isEditMode && (
        <Tooltip title="Go Back">
          <IconButton onClick={goBack} data-testid="back-button">
            <ArrowBackRounded />
          </IconButton>
        </Tooltip>
      )}

      <Typography flex="1 0 auto" align={isEditMode ? 'center' : 'left'}>
        {' '}
        {isEditMode ? 'Edit' : 'Details of Person'}{' '}
      </Typography>
      {!isEditMode && (
        <Tooltip title="Go to Home" data-testid="home-button">
          <IconButton onClick={goToHome}>
            <HomeRounded />
          </IconButton>
        </Tooltip>
      )}

      {!isEditMode && (
        <Tooltip title="Edit" data-testid="edit-button">
          <IconButton onClick={goToUpdateMode}>
            <EditRounded />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

export default PersonDetailHeader
