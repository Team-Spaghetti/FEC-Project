import React from 'react';
import {useState} from 'react';


export default function ReviewBody(props) {
  const [showAll, setShowAll] = useState(false);
  const [body, setBody] = useState(props.text.slice(0,250));

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);
  var remainder = '';
  function handleShowLess() {
    setBody(props.text.slice(0,250));
    showLess();
  }
  function handleShowMore() {
    setBody(props.text);
    showMore();
  }

  if (props.text.length>250) {
    return (
      <div>
        {showAll ? <div><p>{body}</p><button onClick ={handleShowLess}>Show Less</button></div> : <div><p>{body}</p><button onClick={handleShowMore}>Show More</button></div>}
      </div>
    )
  } else {
    return (
      <p>{props.text}</p>
    )
  }
}