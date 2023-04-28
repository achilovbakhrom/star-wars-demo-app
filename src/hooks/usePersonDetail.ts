import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { AppDispatch } from '../config/store'

import { fetchDetail, detailActions } from '../redux'

const usePersonDetail = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [params] = useSearchParams()
  useEffect(() => {
    const url = params.get('url')

    if (url) {
      dispatch(fetchDetail(url))
    } else {
      dispatch(detailActions.setError({ error: 'Invalid url was provided!' }))
    }
    return () => {
      dispatch(detailActions.setEditMode({ isEdit: false }))
    }
  }, [params, dispatch])
}

export default usePersonDetail
