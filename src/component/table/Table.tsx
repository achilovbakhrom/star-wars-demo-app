import React from 'react'
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
  TableBody,
  Box,
  Typography,
  TablePagination,
} from '@mui/material'

type Alignment = 'left' | 'center' | 'right' | 'justify'

export type CellData<T> = {
  header: string
  index?: keyof T
  render?: (item: T) => string | React.ReactNode
  width?: number
  headerAlign?: Alignment
  cellAlign?: Alignment
}

type Props<T> = {
  isLoading: boolean
  fields: CellData<T>[]
  data: T[]
  total: number
  page: number
  size: number
  getKey: (item: T) => string
  onRowClick?: (item: T) => void
  onPageChange?: (page: number) => void
}

function Table<T>({
  fields,
  isLoading,
  data,
  total,
  page,
  size,
  onRowClick,
  onPageChange,
  getKey,
}: Props<T>) {
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {fields.map((field) => (
              <TableCell
                key={field.header}
                width={field.width}
                align={field.headerAlign}
              >
                {field.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            data.map((item) => (
              <TableRow
                key={getKey(item)}
                onClick={() => {
                  onRowClick?.(item)
                }}
                data-testid="table-body-row"
              >
                {fields.map((field) => (
                  <TableCell
                    key={String(field.index)}
                    align={field.cellAlign}
                    width={field.width}
                  >
                    {field.render && field.render(item)}
                    {!field.render &&
                      field.index &&
                      (item[field.index] as string)}
                    {!field.render && !field.index && '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </MuiTable>
      {isLoading && (
        <Box
          display="flex"
          flexDirection="row"
          gap={1}
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress color="primary" />
          <Typography> Loading... </Typography>
        </Box>
      )}
      {!isLoading && !data.length && (
        <Box textAlign="center" p={2}>
          No data to show!
        </Box>
      )}
      <TablePagination
        component="div"
        count={total}
        page={page - 1}
        onPageChange={(_, newPage) => onPageChange?.(newPage + 1)}
        rowsPerPage={size}
        SelectProps={{ disabled: isLoading }}
        rowsPerPageOptions={[10]}
      />
    </TableContainer>
  )
}

Table.defaultProps = {
  onRowClick: () => {},
  onPageChange: () => {},
}

export default Table
