import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../config/store'
import { PersonListFilterProps } from '../model/PersonFormProps'
import { personListActions } from '../redux'

const usePersonListFilter = () => {
  const dispatch = useDispatch<AppDispatch>()
  const filter = useSelector<AppState, PersonListFilterProps | undefined>(
    (state) => state.persons.filter
  )
  const open = useSelector<AppState, boolean | undefined>(
    (state) => state.persons.openFilterDialog
  )
  return {
    filter,
    setFilter: (data?: PersonListFilterProps) => {
      dispatch(personListActions.setFilter({ filter: data }))
      dispatch(personListActions.setOpenFilterDialog({ open: false }))
    },
    onClose: () => {
      dispatch(personListActions.setOpenFilterDialog({ open: false }))
    },
    open,
  }
}

export default usePersonListFilter
