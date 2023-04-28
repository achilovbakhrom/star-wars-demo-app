import { useCallback, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppState } from '../config/store'
import { Person } from '../model'
import { PersonListFilterProps } from '../model/PersonFormProps'

import useFetchPersonList from './useFetchPersonList'

const comparePerson = (
  arg: Person,
  filter?: PersonListFilterProps
): boolean => {
  if (
    (filter?.height && arg.height !== filter.height) ||
    (filter?.mass && arg.mass !== filter.mass) ||
    (filter?.birth_year && !arg.birth_year.includes(filter.birth_year)) ||
    (filter?.hair_color && !arg.hair_color.includes(filter.hair_color)) ||
    (filter?.skin_color && !arg.skin_color.includes(filter.skin_color)) ||
    (filter?.homeworld && !arg.homeworld.includes(filter.homeworld))
  ) {
    return false
  }
  return true
}

const usePersonListMain = () => {
  const { fetchPersonList } = useFetchPersonList()
  const navigate = useNavigate()
  const data = useSelector<AppState, Person[]>((state) => state.persons.list)
  const filter = useSelector<AppState, PersonListFilterProps | undefined>(
    (state) => state.persons.filter
  )
  const isLoading = useSelector<AppState, boolean | undefined>(
    (state) => state.persons.isLoading
  )
  const total = useSelector<AppState, number | undefined>(
    (state) => state.persons.total
  )
  const error = useSelector<AppState, string | undefined>(
    (state) => state.persons.error
  )
  const size = useSelector<AppState, number | undefined>(
    (state) => state.persons.size
  )
  const page = useSelector<AppState, number | undefined>(
    (state) => state.persons.page
  )

  const goToDetails = useCallback(
    (url: string) => {
      navigate(url ? `/detail?url=${url}` : '/detail')
    },
    [navigate]
  )

  useEffect(() => {
    fetchPersonList({ page: 1 })
  }, [fetchPersonList])

  const filteredData = useMemo(
    () => data.filter((item) => comparePerson(item, filter)),
    [data, filter]
  )

  return {
    data: filteredData,
    isLoading,
    error,
    goToDetails,
    total,
    size,
    page,
    fetchPersonList,
  }
}

export default usePersonListMain
