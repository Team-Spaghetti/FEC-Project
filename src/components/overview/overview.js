import React from 'react'
import Images from './images.js'
import ProductInfo from './productInfo.js'
import StyleSelector from './styleSelector.js'
import Cart from './cart.js'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export default function Overview() {
  return(
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Images />
          </Grid>
          <Grid item xs={12} sm={4} container spacing={2} direction="column">
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
      </Container>
    </div>
  )
}
