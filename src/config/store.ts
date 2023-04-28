import { configureStore } from '@reduxjs/toolkit'
import { presonsSlice, detailSlice } from '../redux'

const store = configureStore({
  reducer: {
    persons: presonsSlice.reducer,
    detail: detailSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
