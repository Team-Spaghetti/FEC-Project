
import React, { useEffect, useState } from 'react';
import AnswerList from './Answers/AnswerList'
// will take a question object then populate part of the componet with question info and pass answers part to answers component
// will pass answer portion of question to answer list
// answer list will comprise answers and depending on whether more answers are clicked will display answers accordingly
// add answer will be component that will present form modal for new answer input
// load answer will be a button that'll show load more answers
// must figure out logic to use for choosing when to show load more answers, can apply this logic to load more questions button
// helpfulness will be a button that'll send a put request, on click, convert from button to text
// same with report
var Question = ({question}) => {
  return (
    <div className="q" >
      <div className="qPortion">
        <span className="actualQ"><b> Q: {question.question_body} </b></span>
        <span className="qsubs"> Helpful?
          <button className="helpful"><u>Yes</u>({question.question_helpfulness})</button>
          &nbsp; | &nbsp;
          <button className="addA"><u>Add Answer</u></button>
        </span>
      </div>
      <AnswerList answers={question.answers} />
    </div>
  )
}

export default Question;