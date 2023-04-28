import { Paper } from '@mui/material'
import { defaultTo } from 'lodash'
import React from 'react'

import Table from '../../component/table/Table'
import usePersonListMain from '../../hooks/usePersonListMain'

const PersonList: React.FC = () => {
  const { data, isLoading, goToDetails, total, size, page, fetchPersonList } =
    usePersonListMain()

  return (
    <Paper style={{ width: 1000 }}>
      <Table
        isLoading={Boolean(isLoading)}
        fields={[
          {
            header: 'Name',
            index: 'name',
          },
          {
            header: 'Birth',
            index: 'birth_year',
          },
          {
            header: 'Height',
            index: 'height',
          },
          {
            header: 'Mass',
            index: 'mass',
          },
        ]}
        onRowClick={(item) => goToDetails(item.url)}
        data={data || []}
        page={defaultTo(page, 0)}
        total={defaultTo(total, 0)}
        onPageChange={(newPage) => {
          fetchPersonList({ page: newPage })
        }}
        size={defaultTo(size, 0)}
        getKey={(item) => item.name}
      />
    </Paper>
  )
}

PersonList.defaultProps = {
  data: [],
  isLoading: false,
  onRowClick: () => {},
  total: 0,
  size: 10,
  page: 1,
  onPageChange: () => {},
}

export default PersonList
