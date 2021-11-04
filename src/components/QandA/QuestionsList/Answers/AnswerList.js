import React, { useEffect, useState } from 'react';
import Answer from './Answer'

var AnswerList = ({ answers }) => {

  if(!Object.keys(answers)[0]) {
    return (<div></div>);
  }else {
  return (
    <div className="al">
      {Object.keys(answers).map(answer =>
      <Answer answer={answers[answer]} key={answer}/>)}
    </div>
  )}
}

export default AnswerList;