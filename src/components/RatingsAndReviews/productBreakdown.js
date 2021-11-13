import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export default function ProductBreakdown(props) {
  const characteristics = Object.keys(props.productContext.meta.meta.characteristics);
  return (
    <div>{characteristics.map((characteristic) => {
      return(
        <div key={characteristic}>{characteristic}
          <Box sx={{ width: '50%', mr: 1 }}>
            <Slider defaultValue={props.productContext.meta.meta.characteristics[characteristic].value} min={1} max={5} disabled/>
        </Box>
      </div>
      )
    })}</div>
  )
}