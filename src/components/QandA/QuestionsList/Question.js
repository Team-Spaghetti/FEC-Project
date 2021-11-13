
import React, { useEffect, useState } from 'react';
import AnswerList from './Answers/AnswerList';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { useForm, TemplateForm } from '../formHandlers/bluePrint';
import Input from '../formHandlers/controls/input';
import Typography from '@mui/material/Typography';
import Button from '../formHandlers/controls/button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const initialValues = {
  nickname: '',
  answer: '',
  email: ''
}

var Question = ({question}) => {
  var [helpful, markHelpful] = useState(0);
  useEffect(() => {}, [helpful]);
  const [open, setOpen] = useState(false);

  var handleOpen = () => setOpen(true);
  var handleClose = () => setOpen(false);

  const validate = (formValues = values) => {

    const temp = { ...errors };

    if ('nickname' in formValues) {
      temp.nickname = formValues.nickname ? "" : "This is a required Field";
    }
    if ('answer' in formValues) {
      temp.answer = formValues.answer ? "" : "You've not entered your answer.";
    }
    if ('email' in formValues) {
      if (!formValues.email) {
        temp.email = "This is a required Field";
      } else {
        temp.email = (/$^|.+@.+..+/).test(formValues.email) ? "" : "Email is not valid.";
      }
    }

    setErrors({
      ...temp
    })

    return Object.values(temp).every(error => error === '');
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
    if (noErrors) {
      handleClose();
      setValues(initialValues);
      axios
        .post(`http://localhost:3000/qa/questions/${question.question_id}/answer`, { body: values.answer, name: values.nickname, email: values.email, photos: [] })
        .then(response => console.log('Success'))
        .catch(err => console.error(err))
    }
  }

  var helpfulFunc = () => {
    markHelpful(1);
    axios
      .put(`http://localhost:3000/qa/questions/${question.question_id}/helpful`)
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
  }

  return (
    <Box width='100%'>
      <Grid container >
        <Grid item><b dangerouslySetInnerHTML={{ __html: `Q: ${question.question_body} `}}></b></Grid>
        <Grid item md></Grid>
        <Grid item > Helpful?
          {
          helpful > 0 ?
              <Button
                text={`Yes(${question.question_helpfulness + 1})`}
                variant="outlined"
                size="small"
              /> :
              <Button
                text={`Yes(${question.question_helpfulness})`}
                variant="outlined"
                size="small"
                onClick={helpfulFunc}
                underline={true}
              />
          }
          &nbsp; | &nbsp;
          <Button
            text="Add Answer"
            variant="outlined"
            size="small"
            onClick={handleOpen}
            underline={true}
          />
        </Grid>
      </Grid>
      <Modal open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <TemplateForm>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <em>Camo Onesie: </em>{question.question_body}
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
            label="Your Answer..."
            name="answer"
            multiline
            rows={4}
            value={values.answer}
            onChange={handleChange}
            error={errors.answer}
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
      <AnswerList answers={question.answers} />
    </Box>
  )
}

export default Question;

