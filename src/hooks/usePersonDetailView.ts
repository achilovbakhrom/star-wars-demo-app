import { useSelector } from 'react-redux'
import { AppState } from '../config/store'
import { Person } from '../model'

const usePersonDetailView = () => {
  const person = useSelector<AppState, Person | undefined>(
    (state) => state.detail.person
  )
  const isLoading = useSelector<AppState, boolean>(
    (state) => state.detail.isLoading
  )
  const isEditMode = useSelector<AppState, boolean>(
    (state) => state.detail.editMode
  )
  const error = useSelector<AppState, string | undefined>(
    (state) => state.detail.error
  )
  return {
    error,
    person,
    isLoading,
    isEditMode,
  }
}

export default usePersonDetailView
