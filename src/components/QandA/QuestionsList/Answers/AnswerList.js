import React, { useEffect, useState } from 'react';
import Answer from './Answer'

var AnswerList = ({ answers }) => {
  var [ansIds, setAnswers] = useState(Object.keys(answers).slice(0,2));
  var numAns = Object.keys(answers).length

  // on clicking load more answers
  // change the displayed answers to all answers
  // rerender the component
  var handleLoad = () => setAnswers(Object.keys(answers));
  useEffect(() => { }, [ansIds])
  if (!ansIds[0]) {
    return (<div></div>);
  }else {
  return (
    <div className="al">
      {ansIds.map(id =>
        <Answer answer={answers[id]} key={id} />)}
      {numAns > 2 ? <button onClick={handleLoad}>LOAD MORE ANSWERS</button> : ''}
    </div>
  )}
}

export default AnswerList;