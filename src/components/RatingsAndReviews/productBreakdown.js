import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { withStyles } from '@material-ui/styles';

const StyledSlider = withStyles({
  thumb: {
    color: 'purple',
  },
  track: {
    color: 'purple',
    height: 5
    },
  rail: {
    color: 'grey',
    height: 5
  }
})(Slider);

export default function ProductBreakdown(props) {
  const characteristics = Object.keys(props.productContext.meta.meta.characteristics);
  const charDescriptions = {
    Size: ['too small', 'too large'],
    Width: ['too narrow', 'too wide'],
    Comfort: ['uncomfortable', 'perfect'],
    Quality: ['poor', 'perfect'],
    Length: ['runs short', 'runs long'],
    Fit: ['runs tight', 'runs long']
  }
  return (
    <div>{characteristics.map((characteristic) => {
      var marks = [
        {
          value: 1,
          label: charDescriptions[characteristic][0]},
        {
          value: 5,
          label: charDescriptions[characteristic][1]
        }
      ];
      return(
        <div key={characteristic}>
          <Grid container>
            <Grid item xs={12}>
            <p>{characteristic}</p>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={11}>
              <Box sx={{ width: '80%', mr: 1 }}>
                <StyledSlider defaultValue={props.productContext.meta.meta.characteristics[characteristic].value} min={1} max={5} disabled marks={marks}/>
              </Box>
            </Grid>
          </Grid>
        </div>
      )
    })}</div>
  )
}