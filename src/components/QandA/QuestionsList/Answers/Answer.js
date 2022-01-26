import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../formHandlers/controls/button';
import Box from '@mui/material/Box';

// convert date to right format
// make answer_name display seller if seller

var Answer = ({answer}) => {
  var [helpful, markHelpful] = useState(0);
  var [reported, report] = useState(0);
  useEffect(() => { }, [helpful, reported]);

  var helpfulFunc = () => {
    markHelpful(1);
    axios
      .put(`http://localhost:5000/qa/answers/${answer.id}/helpful`)
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
  }

  var reportedFunc = () => {
    report(1);
    axios
      .put(`http://localhost:5000/qa/answers/${answer.id}/report`)
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
  }

  return(
    <Box width='100%'>
      <Box width='100%'>
        <b>A: </b>{answer.body}
      </Box>
      <Box>
        <small>
        by {`${answer.answerer_name}, ${new Date(answer.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'utc'
        })}`}
        &nbsp; | &nbsp;
        Helpful?
        {
          <a onClick={() => !helpful && helpfulFunc()}>
            <u>Yes</u>
            ({answer.helpfulness + helpful})
          </a>
        }
        &nbsp; | &nbsp;
        {
          <a onClick={() => !reported && reportedFunc()}>
            <u>{reported ? 'Reported' : 'Report'}</u>
          </a>
        }
        </small>
      </Box>
    </Box>
  )
}

export default Answer;


// store states that'll check of marked as helpful or reported
// if marked as helpful, render text
// if reported, render reported

// checking if seller is author
// can't get seller info from product


