import React, { useEffect, useState } from 'react';

var MoreAns = ({ numAns, loadAns }) => {
  var [display, setDisplay] = useState('LOAD MORE ANSWERS');

  var handleClick = () => {
    loadAns(display);
    setDisplay(display === 'LOAD MORE ANSWERS' ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS');
  }
  // curious as to how I can do this, no function
  useEffect(() => { }, [display]);
  return (
    <div className="ma">
      {numAns > 2 ?
        <button onClick={handleClick}>
          {display}
        </button> : ''}
    </div>
  )
}

export default MoreAns;