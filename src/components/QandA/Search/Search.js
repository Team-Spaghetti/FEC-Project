import React, { useEffect, useState } from 'react';

var Search = ({handleSearch, setText}) => {

  var handleSubmit = e => {
    // will take method passed from qandq then use
    // method to modify what questions will be passed to question list
    e.preventDefault();
    setText('');
  }
  var handleChange = e => {
    setText(e.target.value);
    handleSearch();
  }
  return (
    <div className="sa">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
      </form>
    </div>
  )
}

export default Search;