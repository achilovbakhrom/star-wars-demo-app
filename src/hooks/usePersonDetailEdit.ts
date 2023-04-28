import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../config/store'
import { Person } from '../model'
import { detailActions } from '../redux'

const usePersonDetailEdit = () => {
  const dispatch = useDispatch<AppDispatch>()
  const person = useSelector<AppState, Person | undefined>(
    (state) => state.detail.person
  )
  const isEditMode = useSelector<AppState, boolean>(
    (state) => state.detail.editMode
  )

  const onCancel = useCallback(() => {
    dispatch(detailActions.setEditMode({ isEdit: false }))
  }, [dispatch])

  const updatePerson = useCallback(
    (arg: Person) => {
      dispatch(detailActions.updatePerson({ data: arg }))
    },
    [dispatch]
  )

  return { person, isEditMode, onCancel, updatePerson }
}

export default usePersonDetailEdit
