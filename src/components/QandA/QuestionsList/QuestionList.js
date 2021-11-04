import React, { useEffect, useState } from 'react';
import Question from './Question'

var QuestionList = ({questions}) => {
  return(
    <div className="ql">
      {questions.map(question => <Question key={question.question_id} question={question}/>)}
    </div>
  )
}

export default QuestionList;