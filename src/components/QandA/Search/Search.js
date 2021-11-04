import React, { useEffect, useState } from 'react';

var Search = () => {
  var [text, setText] = useState();

  var handleSubmit = (e) => {
    // will take method passed from qandq then use
    // method to modify what questions will be passed to question list
    e.preventDefault();
    setText('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
      </form>
    </div>
  )
}

export default Search;