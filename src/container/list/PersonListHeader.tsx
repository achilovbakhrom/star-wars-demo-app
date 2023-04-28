import { FilterList } from '@mui/icons-material'
import { Box, IconButton, Paper } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import TextField from '../../component/textField/TextField'
import { AppDispatch } from '../../config/store'
import useFetchPersonList from '../../hooks/useFetchPersonList'
import { personListActions } from '../../redux'

const PersonListHeader: React.FC = () => {
  const { fetchPersonList } = useFetchPersonList()
  const dispatch = useDispatch<AppDispatch>()
  return (
    <Box component={Paper} display="flex" flexDirection="row" gap={2} p={1}>
      <TextField
        fullWidth
        label="Search"
        dataTestId="search"
        onChange={(e) => {
          if (e.target.value) {
            fetchPersonList({ search: e.target.value })
          } else {
            fetchPersonList({ page: 1 })
          }
        }}
      />
      <IconButton
        size="large"
        onClick={() => {
          dispatch(personListActions.setOpenFilterDialog({ open: true }))
        }}
        data-testid="filter-button"
      >
        <FilterList />
      </IconButton>
    </Box>
  )
}

PersonListHeader.defaultProps = {
  onChange: () => {},
}

export default PersonListHeader
