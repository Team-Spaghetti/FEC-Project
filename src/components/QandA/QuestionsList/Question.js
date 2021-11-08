
import React, { useEffect, useState } from 'react';
import AnswerList from './Answers/AnswerList';
import axios from 'axios';
// will take a question object then populate part of the componet with question info and pass answers part to answers component
// will pass answer portion of question to answer list
// answer list will comprise answers and depending on whether more answers are clicked will display answers accordingly
// add answer will be component that will present form modal for new answer input
// load answer will be a button that'll show load more answers
// must figure out logic to use for choosing when to show load more answers, can apply this logic to load more questions button
// helpfulness will be a button that'll send a put request, on click, convert from button to text
// same with report
var Question = ({question}) => {
  var [helpful, markHelpful] = useState(0);
  useEffect(() => {}, [helpful])

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
          <button className="addA"><u>Add Answer</u></button>
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


