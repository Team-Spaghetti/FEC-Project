import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import MoreAns from './MoreAns';

var AnswerList = ({ answers }) => {
  var keys = Object
    .keys(answers)
    .sort((key1, key2) =>
    answers[key1].answerer_name === 'Seller' ? -1 : answers[key2].answerer_name === 'Seller' ? 1 : answers[key1].helpfulness > answers[key2].helpfulness ? -1: 1);

  var [ansIds, setAnswers] = useState(keys.slice(0,2));
  useEffect(() => {}, [ansIds]);
  var numAns = Object.keys(answers).length;
  var loadAns = (display) => {
    display === 'LOAD MORE ANSWERS' ? setAnswers(keys) : setAnswers(keys.slice(0, 2));
  }

  // on clicking load more answers
  // change the displayed answers to all answers
  // rerender the component

  if (!ansIds[0]) {
    return (<div></div>);
  }else {
  return (
    <div className="al">
      {ansIds.map(id =>
        <Answer answer={answers[id]} key={id} />)}
      {numAns > 2 ?
      <MoreAns numAns={numAns} loadAns={loadAns} /> : ''}
    </div>
  )}
}

export default AnswerList;

// SORT answer by helpfulness
// on getting answers,
// sort them
// to sort the answers
// for each key, check helpfulness of object
// if greater, put to front
