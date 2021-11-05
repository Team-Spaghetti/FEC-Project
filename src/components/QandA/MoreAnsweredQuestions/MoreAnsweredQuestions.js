import React, { useEffect, useState } from 'react';

var MoreAnsweredQuestions = ({numQuestions, loadQuestions, display, setdisplay}) => {

  var handleClick = () => {
    loadQuestions(display);
    setDisplay(display === 'More Answered Questions' ? 'Collapse Questions' : 'More Answered Questions');
  }
  // curious as to how I can do this, no function
  useEffect(() => {}, [display]);
  return (
    <div className="ma">
      {numQuestions > 2 ?
      <button onClick={handleClick}>
        { display }
      </button> : ''}
    </div>
  )
 }

export default MoreAnsweredQuestions;