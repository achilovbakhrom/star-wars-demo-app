import React from 'react'
import { screen, render, waitFor, fireEvent } from '@testing-library/react'

import { setupServer } from 'msw/node'

import personListHandler, {
  singlePerson,
  response as personListResponse,
} from './handlers/personList'
import App from '../app'

const server = setupServer(...personListHandler)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})

test('Should test person list', async () => {
  render(<App />)

  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )
  const search = screen.getByTestId('search')

  fireEvent.change(search, { target: { value: 'Luke' } })
  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(1)
  )

  fireEvent.change(search, { target: { value: '' } })
  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )

  const nextPageButton = screen.getByTitle('Go to next page')
  fireEvent.click(nextPageButton)
  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )
})

test('should test go to details', async () => {
  render(<App />)

  const rows = await screen.findAllByTestId('table-body-row')

  expect(rows).toHaveLength(10)

  fireEvent.click(rows[0])

  await screen.findByText(/Details of Person/)

  await screen.findByText(/Name/)

  expect(screen.getByText(singlePerson.name)).toBeInTheDocument()
  expect(screen.getByText(singlePerson.height)).toBeInTheDocument()
  expect(screen.getByText(singlePerson.mass)).toBeInTheDocument()
  expect(screen.getByText(singlePerson.gender)).toBeInTheDocument()
  expect(screen.getByText(singlePerson.hair_color)).toBeInTheDocument()
  expect(screen.getByText(singlePerson.eye_color)).toBeInTheDocument()
  expect(screen.getByText(singlePerson.homeworld)).toBeInTheDocument()
  const filmItems = screen.getAllByTestId('film-item')
  expect(filmItems).toHaveLength(singlePerson.films.length)
  const specItems = screen.queryAllByTestId('species-item')
  expect(specItems).toHaveLength(singlePerson.species.length)
  const vehicleItems = screen.getAllByTestId('vehicle-item')
  expect(vehicleItems).toHaveLength(singlePerson.vehicles.length)
  const starshipItems = screen.getAllByTestId('starship-item')
  expect(starshipItems).toHaveLength(singlePerson.starships.length)

  const backButton = screen.getByTestId('back-button')
  fireEvent.click(backButton)

  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )
})

test('should test home button', async () => {
  render(<App />)

  const rows = await screen.findAllByTestId('table-body-row')

  expect(rows).toHaveLength(10)

  fireEvent.click(rows[0])

  await screen.findByText(/Name/)

  const backButton = screen.getByTestId('home-button')
  fireEvent.click(backButton)

  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )

  expect(rows).toHaveLength(10)
})

test('should test edit', async () => {
  render(<App />)

  const rows = await screen.findAllByTestId('table-body-row')

  expect(rows).toHaveLength(10)

  fireEvent.click(rows[0])

  await screen.findByText(/Name/)

  expect(screen.getByText(singlePerson.name)).toBeInTheDocument()

  let editButton = screen.getByTestId('edit-button')
  fireEvent.click(editButton)

  const nameInput: HTMLInputElement = await screen.findByTestId('name')
  expect(nameInput).toBeInTheDocument()
  expect(nameInput.value).toEqual(singlePerson.name)

  fireEvent.change(nameInput, { target: { value: '' } })
  await screen.findByText(/name is a required field/)
  expect(screen.getByText(/name is a required field/)).toBeInTheDocument()
  fireEvent.change(nameInput, { target: { value: 'Bakhrom Achilov' } })

  const heightInput = screen.getByTestId('height')
  fireEvent.change(heightInput, { target: { value: '191' } })

  const massInput = screen.getByTestId('mass')
  fireEvent.change(massInput, { target: { value: '70' } })

  const hairColorInput = screen.getByTestId('hair_color')
  fireEvent.change(hairColorInput, { target: { value: 'red' } })

  const skinColorInput = screen.getByTestId('skin_color')
  fireEvent.change(skinColorInput, { target: { value: 'red' } })

  const birthYearInput = screen.getByTestId('birth_year')
  fireEvent.change(birthYearInput, { target: { value: 'red' } })

  const homeworldInput = screen.getByTestId('homeworld')
  fireEvent.change(homeworldInput, { target: { value: 'red' } })

  const saveButton = screen.getByTestId('save')
  fireEvent.click(saveButton)
  await screen.findByText(/Name/)
  expect(screen.getByText(/Bakhrom Achilov/)).toBeInTheDocument()
  editButton = screen.getByTestId('edit-button')
  fireEvent.click(editButton)
  const cancelButton = await screen.findByTestId('cancel')
  fireEvent.click(cancelButton)
  await screen.findByText(/Name/)

  const homeButton = screen.getByTestId('home-button')
  fireEvent.click(homeButton)
  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )
})

test('should test error', async () => {
  render(<App />)

  const rows = await screen.findAllByTestId('table-body-row')

  expect(rows).toHaveLength(10)

  fireEvent.click(rows[1])

  await screen.findByText(/Invalid url was provided!/)
  const homeButton = screen.getByTestId('home-button')
  fireEvent.click(homeButton)
  await waitFor(() =>
    expect(screen.getAllByTestId('table-body-row')).toHaveLength(10)
  )
})

test('should test filterdialog', async () => {
  render(<App />)
  await screen.findAllByTestId('table-body-row')
  const filterButton = screen.getByTestId('filter-button')
  fireEvent.click(filterButton)
  await screen.findByTestId('height')
  const heightInput = screen.getByTestId('height')
  fireEvent.change(heightInput, { target: { value: '172' } })
  const saveButton = screen.getByTestId('save')
  fireEvent.click(saveButton)
  await waitFor(() =>
    expect(screen.queryByTestId('height')).not.toBeInTheDocument()
  )
  const rows = await screen.findAllByTestId('table-body-row')
  expect(rows).toHaveLength(
    personListResponse.results.filter((item) => item.height === '172').length
  )
})
