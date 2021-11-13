import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

var style = {
  borderRadius: 10,
  bgcolor: 'background.paper',
  position: 'fixed',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  p: 3.5,
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '60%',
  border: '2px solid #fff',
  // boxShadow: 24,
  alignItems: "center",
  '& .MuiTextField-root': { m: 1, width: '85%' },
};


const useForm = (initialValues, validate, validateOnChange = false) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
    validateOnChange && validate({[name]: value})
  }

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    handleChange,
    setErrors,
    errors,
    reset
  }
}

const TemplateForm = props => {
  return (
      <Stack direction="row" spacing={2} sx={style}>
        {props.children}
      </Stack>
  )
}

export { useForm, TemplateForm};