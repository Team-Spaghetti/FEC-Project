import React, { useEffect, useState } from 'react';

// convert date to right format
// make answer_name display seller if seller

var Answer = ({answer}) => {
  return(
    <div className="a">
      <div className="aPortion">
        <b>A: </b>{answer.body}
      </div>
      <div className="subs">
        by {`${answer.answerer_name}, ${answer.date}`}
        &nbsp; | &nbsp;
        Helpful?
        <button className="helpful"><u>Yes</u>({answer.helpfulness})</button>
        &nbsp; | &nbsp;
        <button className="reportA"><u>Report</u></button>
      </div>
    </div>
  )
}

export default Answer;