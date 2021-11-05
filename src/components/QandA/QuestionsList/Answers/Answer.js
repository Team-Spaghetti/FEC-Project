import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        by {`${answer.answerer_name}, ${answer.date}`}
        &nbsp; | &nbsp;
        Helpful?
        {
          helpful > 0 ?
            <button>{`Yes(${answer.helpfulness + 1})`}</button> :
            <button className="helpful" onClick={helpfulFunc}><u>Yes</u>({answer.helpfulness})
            </button>
        }
        &nbsp; | &nbsp;
        {
          reported > 0 ?
            <button>Reported</button> :
            <button className="reportA" onClick={reportedFunc}><u>Report</u>
            </button>
        }
      </div>
    </div>
  )
}


export default Answer;


// store states that'll check of marked as helpful or reported
// if marked as helpful, render text
// if reported, render reported
