import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { PersonListFilterProps } from '../../model/PersonFormProps'
import TextField from '../textField/TextField'

type Props = {
  value?: PersonListFilterProps
  onChange: (data: PersonListFilterProps) => void
  onCancel: () => void
}

const PersonListFilterDialogForm: React.FC<Props> = ({
  value,
  onChange,
  onCancel,
}) => {
  const formik = useFormik({
    initialValues: value || {},
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      height: Yup.number(),
      mass: Yup.number(),
      hair_color: Yup.string(),
      skin_color: Yup.string(),
      birth_year: Yup.string(),
      homeworld: Yup.string(),
    }),
    onSubmit: onChange,
  })

  return (
    <Dialog onClose={onCancel} open fullWidth>
      <DialogTitle>Filter List</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} p={2}>
          <TextField
            fullWidth
            label="Height"
            onChange={(e) => {
              formik.setFieldValue('height', e.target.value)
            }}
            value={
              formik.values.height !== undefined
                ? formik.values.height.toString()
                : undefined
            }
            errorText={formik.errors.height}
            dataTestId="height"
          />
          <TextField
            fullWidth
            label="Mass"
            onChange={(e) => {
              formik.setFieldValue('mass', e.target.value)
            }}
            value={
              formik.values.mass !== undefined
                ? formik.values.mass.toString()
                : undefined
            }
            errorText={formik.errors.mass}
            dataTestId="mass"
          />
          <TextField
            fullWidth
            label="Hair Color"
            onChange={(e) => {
              formik.setFieldValue('hair_color', e.target.value)
            }}
            value={formik.values.hair_color}
            errorText={formik.errors.hair_color}
            dataTestId="hair_color"
          />
          <TextField
            fullWidth
            label="Skin Color"
            onChange={(e) => {
              formik.setFieldValue('skin_color', e.target.value)
            }}
            value={formik.values.skin_color}
            errorText={formik.errors.skin_color}
            dataTestId="skin_color"
          />
          <TextField
            fullWidth
            label="Birth Year"
            onChange={(e) => {
              formik.setFieldValue('birth_year', e.target.value)
            }}
            value={formik.values.birth_year}
            errorText={formik.errors.birth_year}
            dataTestId="birth_year"
          />
          <TextField
            fullWidth
            label="Homeworld"
            onChange={(e) => {
              formik.setFieldValue('homeworld', e.target.value)
            }}
            value={formik.values.homeworld}
            errorText={formik.errors.homeworld}
            dataTestId="homeworld"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={onCancel}
          data-testid="cancel"
        >
          Close
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => formik.handleSubmit()}
          data-testid="save"
        >
          Save Filter
        </Button>
      </DialogActions>
    </Dialog>
  )
}

PersonListFilterDialogForm.defaultProps = {
  value: {},
}

export default PersonListFilterDialogForm
