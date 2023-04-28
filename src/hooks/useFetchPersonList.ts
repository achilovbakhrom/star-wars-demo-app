import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../config/store'
import { ListFilter } from '../model'

import { fetchPersons, personListActions } from '../redux'

const useFetchPersonList = () => {
  const dispatch = useDispatch<AppDispatch>()

  const fetchPersonList = useCallback(
    (arg: ListFilter) => {
      if (arg.page !== undefined) {
        dispatch(personListActions.setPage({ page: arg.page }))
      }
      dispatch(fetchPersons(arg))
    },
    [dispatch]
  )

  return {
    fetchPersonList,
  }
}

export default useFetchPersonList
