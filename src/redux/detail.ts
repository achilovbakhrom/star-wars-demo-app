import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { Person } from '../model'

const initialState: State = {
  person: undefined,
  isLoading: false,
  error: undefined,
  editMode: false,
}

type State = {
  person?: Person
  isLoading: boolean
  error?: string
  editMode: boolean
}

export const fetchDetail = createAsyncThunk<Person, string>(
  'person/fetchDetail',
  async (url: string) => (await axios.get<Person>(url)).data
)

type IUpdatePerson = {
  data: Person
}

type ISetError = {
  error?: string
}

type ISetEditMode = {
  isEdit: boolean
}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    updatePerson: (state, action: PayloadAction<IUpdatePerson>) => {
      state.person = action.payload.data
      state.editMode = false
    },
    setError: (state, action: PayloadAction<ISetError>) => {
      state.error = action.payload.error
    },
    setEditMode: (state, action: PayloadAction<ISetEditMode>) => {
      state.editMode = action.payload.isEdit
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.isLoading = false
      state.person = action.payload
    })
    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
      state.person = undefined
    })
  },
})

export const { actions: detailActions } = detailSlice
