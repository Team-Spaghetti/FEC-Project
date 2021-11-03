import React from 'react'
import Images from './images.js'
import ProductInfo from './productInfo.js'
import StyleSelector from './styleSelector.js'
import Cart from './cart.js'

export default function Overview() {
  return(
    <div>
      <Images />
      <ProductInfo />
      <StyleSelector />
      <Cart />
    </div>
  )
}
