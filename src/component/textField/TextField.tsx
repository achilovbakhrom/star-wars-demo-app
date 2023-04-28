import { TextField as MuiTextField } from '@mui/material'
import React from 'react'

export type Props = {
  label?: string
  value?: string
  style?: React.CSSProperties
  disabled?: boolean
  errorText?: string
  className?: string
  fullWidth?: boolean
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  dataTestId?: string
}

const TextField: React.FC<Props> = ({
  label,
  style,
  disabled,
  errorText,
  className,
  fullWidth,
  onChange,
  value,
  dataTestId,
}: Props) => {
  return (
    <MuiTextField
      className={className}
      fullWidth={fullWidth}
      onChange={onChange}
      label={label}
      style={style}
      disabled={disabled}
      error={!!errorText}
      helperText={errorText || undefined}
      value={value}
      inputProps={{
        'data-testid': dataTestId,
      }}
    />
  )
}

TextField.defaultProps = {
  label: '',
  style: {},
  value: undefined,
  disabled: false,
  errorText: undefined,
  className: undefined,
  fullWidth: false,
  dataTestId: 'input',
}

export default TextField
