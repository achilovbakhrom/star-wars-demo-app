import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, AppState } from '../config/store'

import { detailActions } from '../redux'

const usePersonDetailHeader = () => {
  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()
  const isEditMode = useSelector<AppState, boolean>(
    (state) => state.detail.editMode
  )

  const goBack = useCallback(() => navigate(-1), [navigate])
  const goToHome = useCallback(() => navigate('/'), [navigate])
  const goToUpdateMode = useCallback(() => {
    dispatch(detailActions.setEditMode({ isEdit: true }))
  }, [dispatch])

  return {
    goBack,
    goToHome,
    isEditMode,
    goToUpdateMode,
  }
}

export default usePersonDetailHeader
