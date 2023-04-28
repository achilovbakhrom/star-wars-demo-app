import React from 'react'
import PersonListFilterDialogForm from '../../component/forms/PersonListFilterDialogForm'
import usePersonListFilter from '../../hooks/usePersonListFilter'

type Props = {}

const PersonListFilter: React.FC<Props> = () => {
  const { filter, setFilter, onClose, open } = usePersonListFilter()
  return open ? (
    <PersonListFilterDialogForm
      value={filter}
      onCancel={onClose}
      onChange={setFilter}
    />
  ) : null
}

export default PersonListFilter
