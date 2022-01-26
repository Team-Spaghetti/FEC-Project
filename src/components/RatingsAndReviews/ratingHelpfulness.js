import React from 'react';
import {useState} from 'react';
const axios = require('axios');
import Grid from '@mui/material/Grid';


export default function RatingHelpfulness(props) {
  const [reviewed, setReviewed] = useState(false);
  const handleClick = () => {
    axios.put(`http://localhost:5000/reviews/${props.review.review_id}/helpful`)
      .then(reponse =>{
        setReviewed(true);
      })
      .catch(err => {
        console.error(err);
      })
  };
  const handleReport = () => {
    axios.put(`http://localhost:5000/reviews/${props.review.review_id}/report`)
      .then(response => {
        props.setReported(true);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return(
    <div className="helpful">
      <Grid container>
        <Grid item>
          <p className="helpfulQuestion">Helpful?</p>
        </Grid>
        <Grid item>
          {reviewed ? <p>Yes ({props.review.helpfulness + 1}) | <u onClick={handleReport}>Report</u></p> : <p><u onClick={handleClick}>Yes</u> ({props.review.helpfulness}) | <u onClick={handleReport}>Report</u></p>}
        </Grid>
      </Grid>
    </div>
  )

}