import React, { useEffect, useState } from 'react';
import Button from '../../formHandlers/controls/button';

var MoreAns = ({ numAns, loadAns }) => {
  var [display, setDisplay] = useState('LOAD MORE ANSWERS');

  var handleClick = () => {
    loadAns(display);
    setDisplay(display === 'LOAD MORE ANSWERS' ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS');
  }
  // curious as to how I can do this, no function
  useEffect(() => { }, [display]);
  return (
    <div className="maa">
      {numAns > 2 ?
        <Button
          text={display}
          variant="outlined"
          onClick={handleClick}
          size="small"
        /> : ''}
    </div>
  )
}

export default MoreAns;