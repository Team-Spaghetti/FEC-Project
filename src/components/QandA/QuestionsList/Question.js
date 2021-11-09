
import React, { useEffect, useState } from 'react';
import AnswerList from './Answers/AnswerList';
import axios from 'axios';
// import AddAnswer from './Answers/AddAnswer';

var Question = ({question}) => {
  var [helpful, markHelpful] = useState(0);
  useEffect(() => {}, [helpful]);
  var [display, setDisplay] = useState(false)
  var handleOpen = () => {
    setDisplay(true)
    // displays the modal
    // sets display of modal into block
  }
  var handleClose = () => {
    setDisplay(false)
  }

  var helpfulFunc = () => {
    markHelpful(1);
    axios
      .put(`http://localhost:3000/qa/questions/${question.question_id}/helpful`)
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
  }

  return (
    <div className="q" >
      <div className="qPortion">
        <span className="actualQ"><b> Q: {question.question_body} </b></span>
        <span className="subs"> Helpful?
          {
          helpful > 0 ?
              <button>
                {`Yes(${question.question_helpfulness + 1})`}
              </button> :
          <button className="helpful" onClick={helpfulFunc}>
            <u>Yes</u>({question.question_helpfulness})
          </button>
          }
          &nbsp; | &nbsp;
          <button onClick={handleOpen} className="aaBtn"><u>Add Answer</u>
          </button>
          {/* <AddAnswer display={display} handleClose={handleClose} handleOpen={handleOpen}/> */}
        </span>
      </div>
      <AnswerList answers={question.answers} />
    </div>
  )
}

export default Question;

// store state that will check to see if marked as helpful
// if marked as helpful, render text
// else render button



{/* <TextField fullWidth id="fullWidth" label="Your Email" variant="outlined" aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': '*For authentication purposes; you will not be emailed',
            }}/>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
              <FilledInput
                id="filled-adornment-weight"
                value={values.weight}
                onChange={handleChange('weight')}
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': '*For authentication purposes; you will not be emailed',
            }}/>
              />
              <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
            </FormControl>
            <Typography id="modal-modal-description" sx={{fontSize:10, marginBottom: 0}}>
              *For authentication purposes; you will not be emailed
            </Typography>
          style={{width: '100%', display:'flex', flexDirection:'column'}}*/}