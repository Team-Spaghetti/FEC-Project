import React, {useEffect, useState} from 'react';
import {useProduct} from '../../contexts/ProductContext';
import axios from 'axios';
import QuestionList from './QuestionsList/QuestionList';
import Search from './Search/Search';
import AddQuestion from './AddQuestion/AddQuestion';
import MoreAnsweredQuestion from './MoreAnsweredQuestions/MoreAnsweredQuestions';

// create mega component that'll house all other components
// main concern is how to make context available to components nested several levels deep

// Plan is im going to test nested components access to context, finish the context hooks tutorial and tackle contexts tonight

// mega component
// access product id in mega compn using context
// make query to grab all questions for particular product
// pass questions to questions list comp
// in questions list, access these questions and map them to question
// add questions, searchQuestions and more answered questions will modify questions on display
// can use a function in mega comp that will filter questions to provide question list
// add question will have access to this filter
// Added questions will be put at the top of the list to
// display to user
// search questions will filter questions to select questions matching search tag
// and provide these to the questions list
// more questions will increase the number of questions provided to questions list

var QandA = () => {

  var id = useProduct().product, questions = [];

  useEffect(() => {
    axios
      .get('http://localhost:3000/qa/questions', { params: { product_id: 38323 } })
      .then(response => {
        questions = response.data.results;
        console.log(questions);
      })
      .catch(err => console.error(err));
  }, [])

  return(
    <div>
      <QuestionList questions={questions}/>
      <Search />
      <AddQuestion />
      <MoreAnsweredQuestion />
    </div>
  )
}

export default QandA;