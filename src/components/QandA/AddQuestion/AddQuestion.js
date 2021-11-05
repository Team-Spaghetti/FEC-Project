import React, { useEffect, useState } from 'react';

var AddQuestion = () => {
  var handleClick = () => {
    // will execute logic for presenting modal form to user to fill up
  }
  return (
    <div className="aq">
      <button onClick={handleClick}>Add A Question +</button>
    </div>
  )
 }

export default AddQuestion;

// Add question on click will present a modal
// the modal will be in the form of a form
// this form will be hidden from view
// then add question is clicked
// form will be revieald
// after form is revealed, clicking on anywhere else on the form won't make the form go away
// clicking on the x button will make the form go away
// clicking outside the form will make the form go away