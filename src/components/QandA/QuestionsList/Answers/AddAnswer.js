import React, { useEffect, useState } from 'react';

const AddAnswer = ({display, handleClose, handleOpen}) => {

  return (
    <div className="aa">
      <div className="modal" style={{display: display ? 'block' : 'none'}}>
        <div className="modal-content" >
          <div className="modal-form">
            <span id="closeBtn" onClick={handleClose} >&times;</span>
            <form>
              <div>
                Ask your Question about (productname here)
                <div>
                  <div>Your Question*:</div>
                  <label for="question"></label>
                  <textarea name="question" id="question" required="required" cols="30" rows="10" maxlength="1000"
                    placeholder="Your Question..."></textarea>
                </div>
                <div>
                  Your Nickname*:
                  <label for="nickname">
                    <input type="text" required="required" id='nickname' maxlength="60" placeholder='Example:jack543!'/>
                  </label>
                  <div><em class="disclaimer">For privacy reasons; do not use your full name or email address</em></div>
                </div>
                <div>
                  <label for="email">
                    Your Email*:
                    <input type="email" required="required" name="email" id="email" maxlength="60" placeholder="Enter your email"/>
                  </label>
                  <div> <em class="disclaimer">For authentication reasons. you will not be emailed</em>
                  </div>
                </div>
                <span class='submit'>
                  <button class="submitQ">Submit Your Question</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAnswer;


// raw implementation of modal
// create the form
// wrap form in div with display of none
// put dit in addquestion component
// on clicking buttton
// change display to block
// on clicking anywhere else on page or on x
// change display to hidden
// form must have validation components
// form must have submit button
// if form submit button clicked on
// don't close till all input meet requirements

// Steps
// first build form
// then include submit functionality
// if form validations not met
// keep form on display with validation inputs highlighted

// make search handle all cases--complete
// add scroll bar activation--complete
// style question components-done
// style modal for increasing and decreasing
// handle how questions will be added to feed
// dangerous html-done
// style buttons and answer date font sizes
// look into require and import documentation
// make search bar show the product you're on
// set a minimum width
// for clickable items on the page, set cursor to pointer
// make the width of images tp 100% of the container element
// then you can set the container element to a fixed width
// formic