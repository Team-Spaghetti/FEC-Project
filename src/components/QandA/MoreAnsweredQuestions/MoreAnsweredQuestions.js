import React, { useEffect, useState } from 'react';
import Button from '../formHandlers/controls/button';

var MoreAnsweredQuestions = ({ numQuestions, loadQuestions, display, setDisplay}) => {

  var handleClick = () => {
    console.log('test');
    loadQuestions(display);
    setDisplay(display === 'More Answered Questions' ? 'Collapse Questions' : 'More Answered Questions');
  }
  // curious as to how I can do this, no function
  useEffect(() => {}, [display]);
  return (
    <div className="ma">
      {numQuestions > 2 ?
        <Button
          text={display}
          variant="outlined"
          onClick={handleClick}
        /> : ''}
    </div>
  )
 }

export default MoreAnsweredQuestions;