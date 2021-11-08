import React from 'react';
import {useState} from 'react';
const axios = require('axios');


export default function RatingHelpfulness(props) {
  const [reviewed, setReviewed] = useState(false);
  const handleClick = () => {
    axios.put(`http://localhost:3000/reviews/${props.review.review_id}/helpful`)
      .then(reponse =>{
        setReviewed(true);
      })
      .catch(err =>{
        console.error(err);
      })
  };

  return(
    <div>
    <p>Helpful?</p>
    {reviewed ? <p>Yes ({props.review.helpfulness + 1})</p> : <button onClick={handleClick}>Yes ({props.review.helpfulness})</button>}
    </div>
  )

}