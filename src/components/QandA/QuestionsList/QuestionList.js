import React, { useEffect, useState } from 'react';
import question from './Question'

var QuestionsList = ({questions}) => {
  return(
    <div>
      {questions.map(question => <Question question={question}/>)}
    </div>
  )
}

export default QuestionsList;