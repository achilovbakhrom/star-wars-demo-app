import { Person } from './Person'

export type PersonFormProps = Pick<
  Person,
  | 'name'
  | 'height'
  | 'mass'
  | 'hair_color'
  | 'skin_color'
  | 'birth_year'
  | 'homeworld'
>

export type PersonListFilterProps = Partial<Omit<PersonFormProps, 'name'>>
