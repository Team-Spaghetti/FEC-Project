import React from 'react';
import TextField from '@mui/material/TextField';

const Input = props => {
  const {
          label,
          variant,
          name,
          value,
          onChange,
          color,
          error = null,
          helperText,
          ...others
        } = props;

  return (
    <TextField
      variant={variant || "outlined"}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      color={color || "secondary"}
      helperText={error || helperText}
      error={error ? true : false}
      {...others}
    />
  )
}

export default Input;