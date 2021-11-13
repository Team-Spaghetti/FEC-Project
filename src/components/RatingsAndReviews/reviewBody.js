import React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';

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
        {showAll ? <div>
          <p className="reviewBody">{body}</p>
          <Grid container>
            <Grid item xs={4}/>
            <Grid item xs={4}>
              <button className="reviewBodyButton" onClick ={handleShowLess}>Show Less</button>
            </Grid>
            <Grid item xs={4}/>
          </Grid>
        </div> : <div >
          <p className="reviewBody">{body}</p>
          <Grid container>
            <Grid item xs={4}/>
            <Grid item xs={4}>
              <button className="reviewBodyButton" onClick={handleShowMore}>Show More</button>
            </Grid>
            <Grid item xs={4}/>
          </Grid>
        </div>}
      </div>
    )
  } else {
    return (
      <p className="reviewBody">{props.text}</p>
    )
  }
}