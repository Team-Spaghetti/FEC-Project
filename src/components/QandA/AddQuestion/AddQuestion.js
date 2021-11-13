import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '../formHandlers/controls/button';
import { useForm, TemplateForm} from '../formHandlers/bluePrint';
import Input from '../formHandlers/controls/input';
import axios from 'axios';
import Stack from '@mui/material/Stack';
const product_id = require('../productId')

const initialValues = {
  nickname: '',
  question: '',
  email: ''
}

var AddQuestion = () => {
  const [open, setOpen] = useState(false);

  var handleOpen = () => setOpen(true);
  var handleClose = () => setOpen(false);

  const validate = (formValues = values) => {

    const temp = {...errors};

    if ('nickname' in formValues) {
      temp.nickname = formValues.nickname ? "" : "This is a required Field";
    }
    if ('question' in formValues) {
      temp.question = formValues.question ? "" : "You've not entered your question.";
    }
    if ('email' in formValues) {
      if(!formValues.email) {
        temp.email = "This is a required Field";
      } else {
        temp.email = (/$^|.+@.+..+/).test(formValues.email) ? "" : "Email is not valid.";
      }
    }

    setErrors({
      ...temp
    })

    if (formValues === values) return Object.values(temp).every(error => error === '');
  }

  const {
    values,
    handleChange,
    errors,
    setErrors,
    reset
  } = useForm(initialValues, validate, true);

  const handleSubmit = () => {
    let noErrors = validate();
    if(noErrors) {
      handleClose();
      reset();
      axios
      .post(`http://localhost:3000/qa/questions/${product_id}/question`, {body: values.question, name: values.nickname, email: values.email, product_id})
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
    }
  }

  return (
    <div className="aq">
      <Button
        text="Add A Question +"
        variant="outlined"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <TemplateForm>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ask your Question about <em>Camo Onesie</em>
          </Typography>
          <Input
            label="What's your nickname?"
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            helperText="For privacy reasons, do not use your full name or email address"
            error={errors.nickname}
          />
          <Input
            label="Your Question..."
            name="question"
            multiline
            rows={4}
            value={values.question}
            onChange={handleChange}
            error={errors.question}
          />
          <Input
            label="What's your email?"
            name="email"
            value={values.email}
            onChange={handleChange}
            helperText="For authentication purposes; you will not be emailed"
            error={errors.email}
          />
          <Stack direction="row" spacing={2}>
            <Button
              text="Submit"
              type="submit"
              onClick={handleSubmit}
            />
            <Button
              text="Reset"
              variant="outlined"
              onClick={reset}
            />
          </Stack>
        </TemplateForm>
        </Modal>
    </div>
  )
}

export default AddQuestion;

// start with error validation after form submission
// then move to validation in real time
// to validate in real time, i have to pass the validate method to on change method
// so onchange, the validate method will evaluate the
// value in the current input

// on submit, you'll validate the form
// by calling the validate method
// the validate method will take the inputs from the
// state
// then check to see if each one of them meets
// the requirements

