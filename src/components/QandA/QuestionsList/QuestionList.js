import React, { useEffect, useState } from 'react';
import Question from './Question';
import MoreAnsweredQuestion from '../MoreAnsweredQuestions/MoreAnsweredQuestions';
import Search from '../Search/Search';

var QuestionList = ({questions}) => {
  var [selected, chooseQuestions] = useState([]);
  var [text, setText] = useState('');

  var loadQuestions = (display) => {
    display === 'More Answered Questions' ? chooseQuestions(questions) : chooseQuestions(questions.slice(0, 2));
  }
  var handleSearch = text => {
    if(text.length > 3) chooseQuestions(questions.filter(question => question.question_body.includes(text)))
  };
  useEffect(() => {}, [selected]);

  selected = selected.length > 0 ? selected : questions.slice(0,2);

  return(
    <div className="ql">
      <Search handleSearch={handleSearch} setText={setText}/>
      {selected.map(question => <Question key={question.question_id} question={question}/>)}
      <MoreAnsweredQuestion numQuestions={questions.length} loadQuestions={loadQuestions} />
    </div>
  )
}

export default QuestionList;