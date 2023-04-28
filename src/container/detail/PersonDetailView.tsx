import { Box, List, ListItem } from '@mui/material'
import { defaultTo } from 'lodash'
import React from 'react'
import moment from 'moment'
import DetailViewItem from '../../component/custom/DetailViewItem'
import usePersonDetailView from '../../hooks/usePersonDetailView'

const defaultNA = (arg: any) => defaultTo(arg, 'NA')

const PersonDetailView: React.FC = () => {
  const { isLoading, isEditMode, error, person } = usePersonDetailView()
  if (isLoading || isEditMode || error || !person) {
    return null
  }
  return (
    <Box display="flex" flexDirection="row" gap={2} p={2}>
      <Box display="flex" flexDirection="column" gap={1} flex="1 0 50%">
        <DetailViewItem title="Name" value={defaultNA(person?.name)} />
        <DetailViewItem title="Height" value={defaultNA(person?.height)} />
        <DetailViewItem title="Mass" value={defaultNA(person?.mass)} />
        <DetailViewItem
          title="Hair Color"
          value={defaultNA(person?.hair_color)}
        />
        <DetailViewItem
          title="Skin Color"
          value={defaultNA(person?.skin_color)}
        />
        <DetailViewItem
          title="Eye Color"
          value={defaultNA(person?.eye_color)}
        />
        <DetailViewItem
          title="Birth year"
          value={defaultNA(person?.birth_year)}
        />
        <DetailViewItem title="Gender" value={defaultNA(person?.gender)} />
        <DetailViewItem
          title="Homeworld"
          value={defaultNA(person?.homeworld)}
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={1} flex="1 0 70%">
        <DetailViewItem
          title="Films"
          value={
            <List>
              {person?.films?.map((film) => (
                <ListItem key={film} data-testid="film-item">
                  <a href={film} target="_blank" rel="noreferrer">
                    {film}
                  </a>
                </ListItem>
              ))}
            </List>
          }
        />
        <DetailViewItem
          title="Species"
          value={
            <List>
              {person?.species?.map((spec) => (
                <ListItem key={spec} data-testid="species-item">
                  <a href={spec} target="_blank" rel="noreferrer">
                    {spec}
                  </a>
                </ListItem>
              ))}
            </List>
          }
        />
        <DetailViewItem
          title="Vehicles"
          value={
            <List>
              {person?.vehicles?.map((vehicle) => (
                <ListItem key={vehicle} data-testid="vehicle-item">
                  <a href={vehicle} target="_blank" rel="noreferrer">
                    {vehicle}
                  </a>
                </ListItem>
              ))}
            </List>
          }
        />
        <DetailViewItem
          title="Starships"
          value={
            <List>
              {person?.starships?.map((starship) => (
                <ListItem key={starship} data-testid="starship-item">
                  <a href={starship} target="_blank" rel="noreferrer">
                    {starship}
                  </a>
                </ListItem>
              ))}
            </List>
          }
        />
        <DetailViewItem title="Url" value={defaultNA(person?.url)} />
        <DetailViewItem
          title="Created Time"
          value={
            person?.created
              ? moment(person.created).format('YYYY-MM-DD HH:mm')
              : 'NA'
          }
        />
        <DetailViewItem
          title="Edit Time"
          value={
            person?.created
              ? moment(person.edited).format('YYYY-MM-DD HH:mm')
              : 'NA'
          }
        />
      </Box>
    </Box>
  )
}

export default PersonDetailView
