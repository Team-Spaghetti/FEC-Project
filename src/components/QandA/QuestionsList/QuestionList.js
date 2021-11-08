import React, { useEffect, useState } from 'react';
import Question from './Question';
import MoreAnsweredQuestion from '../MoreAnsweredQuestions/MoreAnsweredQuestions';
import Search from '../Search/Search';

var QuestionList = ({questions}) => {
  var [selected, chooseQuestions] = useState([]);
  var [text, setText] = useState('');
  var [display, setDisplay] = useState('More Answered Questions')

  var loadQuestions = (display) => {
    display === 'More Answered Questions' ? chooseQuestions(questions) : chooseQuestions(questions.slice(0, 2));
  }

  var handleSearch = () => {
    if (text.length < 3) {
      chooseQuestions(questions.slice(0, 2));
      setDisplay('More Answered Questions')
     } else chooseQuestions(questions.filter(question => question.question_body.includes(text)));
  };

  useEffect(() => {chooseQuestions(questions.slice(0,2))}, [questions]);

  return(
    <div className="ql">
      <Search handleSearch={handleSearch} setText={setText}/>
      {selected.map(question => <Question key={question.question_id} question={question}/>)}
      <MoreAnsweredQuestion numQuestions={questions.length} loadQuestions={loadQuestions} display={display} setDisplay={setDisplay}/>
    </div>
  )
}

export default QuestionList;

// to handle search as user types, i'll put the handle search method inside the onchange listener
// when the search string length is greater than 3, handlesearch will search for questions matching, until then, the displayed questions will be same as selected

// the main pool of question to be displayed will depend on 3 factors
//

// setting up possibility of different state for search questions
//