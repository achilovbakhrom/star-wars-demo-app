import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { ListFilter, Person, Response } from '../model'
import { PersonListFilterProps } from '../model/PersonFormProps'

type FilterDialogModel = PersonListFilterProps

const initialState: State = {
  list: [],
  isLoading: false,
  error: undefined,
  previous: undefined,
  next: undefined,
  page: 1,
  size: 10,
  filter: {},
}

type State = {
  previous?: string
  next?: string
  total?: number
  list: Person[]
  isLoading: boolean
  error?: string
  page: number
  size: number
  filter?: FilterDialogModel
  openFilterDialog?: boolean
}

export const fetchPersons = createAsyncThunk<Response<Person[]>, ListFilter>(
  'person/fetchList',
  async (filter?: ListFilter) => {
    return (
      await axios.get<Response<Person[]>>(`https://swapi.dev/api/people/`, {
        params: filter,
      })
    ).data
  }
)

type ISetPage = {
  page: number
}

type ISetFilter = {
  filter?: FilterDialogModel
}

type ISetDialogOpen = {
  open?: boolean
}

export const presonsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<ISetPage>) => {
      state.page = action.payload.page
    },
    setFilter: (state, action: PayloadAction<ISetFilter>) => {
      state.filter = action.payload.filter
    },
    setOpenFilterDialog: (state, action: PayloadAction<ISetDialogOpen>) => {
      state.openFilterDialog = action.payload.open
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPersons.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPersons.fulfilled, (state, action) => {
      state.isLoading = false
      state.total = action.payload.count
      state.previous = action.payload.previous
      state.next = action.payload.next
      state.list = action.payload.results
    })
    builder.addCase(fetchPersons.rejected, (state, action) => {
      state.error = action.error.message
    })
  },
})

export const { actions: personListActions } = presonsSlice
