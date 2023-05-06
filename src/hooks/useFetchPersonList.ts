import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { debounce } from 'lodash'
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
  const debouncedSearch = debounce((search) => {
    if (search) {
      fetchPersonList({ search })
    } else {
      fetchPersonList({ page: 1 })
    }
  }, 300)
  return {
    fetchPersonList,
    debouncedSearch,
  }
}

export default useFetchPersonList
