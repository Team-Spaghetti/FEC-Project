import React from 'react';
import {useState} from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function CharacteristicForm(props) {
  const[charValue, setCharValue] = useState();
  const handleChange = (event) => {
    setCharValue(event.target.value);
    var temp = {...props.charValues};
    temp[props.id] = event.target.value;
    setCharValues(temp);
  }
  return (
    <div>
      <FormLabel component="legend">{props.characteristic}</FormLabel>
      <RadioGroup aria-label={props.characteristic} required onChange={handleChange} value={charValue}>
        <FormControlLabel value="1" control={<Radio/>} label={props.descriptions[props.characteristic][0] || ''}/>
        <FormControlLabel value="2" control={<Radio/>} label={props.descriptions[props.characteristic][1] || ''}/>
        <FormControlLabel value="3" control={<Radio/>} label={props.descriptions[props.characteristic][2] || ''}/>
        <FormControlLabel value="4" control={<Radio/>} label={props.descriptions[props.characteristic][3] || ''}/>
        <FormControlLabel value="5" control={<Radio/>} label={props.descriptions[props.characteristic][4] || ''}/>
      </RadioGroup>
    </div>
  )
}