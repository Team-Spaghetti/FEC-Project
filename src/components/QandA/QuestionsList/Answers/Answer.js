import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../formHandlers/controls/button';

// convert date to right format
// make answer_name display seller if seller

var Answer = ({answer}) => {
  var [helpful, markHelpful] = useState(0);
  var [reported, report] = useState(0);
  useEffect(() => { }, [helpful, reported]);

  var helpfulFunc = () => {
    markHelpful(1);
    axios
      .put(`http://localhost:3000/qa/answers/${answer.id}/helpful`)
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
  }

  var reportedFunc = () => {
    report(1);
    axios
      .put(`http://localhost:3000/qa/answers/${answer.id}/report`)
      .then(response => console.log('Success'))
      .catch(err => console.error(err))
  }

  return(
    <div className="a">
      <div className="aPortion">
        <b>A: </b>{answer.body}
      </div>
      <div className="subs">
        by {`${answer.answerer_name}, ${new Date(answer.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'utc'
        })}`}
        &nbsp; | &nbsp;
        Helpful?
        {
          helpful > 0 ?
            <Button
              text={`Yes(${answer.helpfulness + 1})`}
              variant="outlined"
              size="small"
            /> :
            <Button
              text={`Yes(${answer.helpfulness})`}
              variant="outlined"
              size="small"
              onClick={helpfulFunc}
              underline={true}
            />
        }
        &nbsp; | &nbsp;
        {
          reported > 0 ?
            <Button
              text="Reported"
              variant="outlined"
              size="small"
            /> :
            <Button
              text="Report"
              variant="outlined"
              onClick={reportedFunc}
              size="small"
              underline={true}
            />
        }
      </div>
    </div>
  )
}

export default Answer;


// store states that'll check of marked as helpful or reported
// if marked as helpful, render text
// if reported, render reported

// checking if seller is author
// can't get seller info from product
