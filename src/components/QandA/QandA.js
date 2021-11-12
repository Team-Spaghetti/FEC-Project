import React, {useEffect, useState} from 'react';
import {useProduct} from '../../contexts/ProductContext';
import axios from 'axios';
import QuestionList from './QuestionsList/QuestionList';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
const product_id = require('./productId');
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

const styles = {
  // display: 'flex',
  // flexDirection: 'column',
  // position: 'absolute',
  bgcolor: 'background.paper',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  p: 3.5,
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '55%',
}

var QandA = () => {

  var id = useProduct().product;
  var [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/qa/questions', { params: { product_id } })
      .then(response => {
        setQuestions(response.data.results);
      })
      .catch(err => console.error(err));
  }, [])

  return(
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Stack direction="column" spacing={1} >
          <Typography
            variant="h6"
            component="div"
          >QUESTIONS & ANSWERS</Typography>
          <QuestionList questions={questions} />
          <CssBaseline />
        </Stack>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}

export default QandA;

//Add addQuestion modal
// add an answer modal
// search functionality