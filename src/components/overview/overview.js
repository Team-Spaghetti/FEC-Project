import React from 'react'
import Images from './images.js'
import ProductInfo from './productInfo.js'
import StyleSelector from './styleSelector.js'
import Cart from './cart.js'
import Grid from '@mui/material/Grid'

export default function Overview() {
  return(
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8}>
          <Images />
        </Grid>
        <Grid item xs={4} container spacing={2} direction="column">
          <Grid item xs={1}>
            <ProductInfo />
          </Grid>
          <Grid item xs={1}>
            <StyleSelector />
          </Grid>
          <Grid item xs={1}>
            <Cart />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
