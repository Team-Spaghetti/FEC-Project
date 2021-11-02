import React from 'react'
import ProductInfo from './productInfo.js'
import StyleSelector from './styleSelector.js'
import Cart from './cart.js'

export default function Overview() {
  return(
    <div>
      <ProductInfo />
      <StyleSelector />
      <Cart />
    </div>
  )
}
