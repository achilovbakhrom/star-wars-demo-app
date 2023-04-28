import React from 'react'
import { Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '../textField/TextField'
import { PersonFormProps } from '../../model/PersonFormProps'

type Props = {
  value: PersonFormProps
  onUpdate: (arg: PersonFormProps) => void
  onCancel: () => void
}

const PersonDetailEditForm: React.FC<Props> = ({
  value,
  onUpdate,
  onCancel,
}) => {
  const formik = useFormik({
    initialValues: value,
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      height: Yup.number().required(),
      mass: Yup.number().required(),
      hair_color: Yup.string().required(),
      skin_color: Yup.string().required(),
      birth_year: Yup.string().required(),
      homeworld: Yup.string().required(),
    }),
    onSubmit: onUpdate,
  })

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" flexDirection="row" gap={3}>
        <TextField
          fullWidth
          label="Name"
          onChange={(e) => {
            formik.setFieldValue('name', e.target.value)
          }}
          value={formik.values.name}
          errorText={formik.errors.name}
          dataTestId="name"
        />
        <TextField
          fullWidth
          label="Height"
          onChange={(e) => {
            formik.setFieldValue('height', e.target.value)
          }}
          value={String(formik.values.height)}
          errorText={formik.errors.height}
          dataTestId="height"
        />
      </Box>
      <Box display="flex" flexDirection="row" gap={3}>
        <TextField
          fullWidth
          label="Mass"
          onChange={(e) => {
            formik.setFieldValue('mass', e.target.value)
          }}
          value={String(formik.values.mass)}
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
      </Box>
      <Box display="flex" flexDirection="row" gap={3}>
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
      </Box>
      <Box>
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
      <Box display="flex" gap={2} justifyContent="flex-end">
        <Button
          variant="contained"
          color="error"
          onClick={onCancel}
          data-testid="cancel"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => formik.handleSubmit()}
          data-testid="save"
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default PersonDetailEditForm
