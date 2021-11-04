import React, { useEffect, useState } from 'react';
import Question from './Question';
import MoreAnsweredQuestion from '../MoreAnsweredQuestions/MoreAnsweredQuestions';

var QuestionList = ({questions}) => {
  var [selected, chooseQuestions] = useState([]);

  var loadQuestions = (display) => {
    display === 'More Answered Questions' ? chooseQuestions(questions) : chooseQuestions(questions.slice(0, 2));
  }
  useEffect(() => {}, [selected])

  selected = selected.length > 0 ? selected : questions.slice(0,2);

  return(
    <div className="ql">
      {selected.map(question => <Question key={question.question_id} question={question}/>)}
      <MoreAnsweredQuestion numQuestions={questions.length} loadQuestions={loadQuestions} />
    </div>
  )
}

export default QuestionList;