import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function Overview() {
  const productContext = useProduct()
  return(
    <div>
      <h1>This is the overview component</h1>
      <h3>The product ID is {productContext.product}</h3>
      <button onClick={productContext.setNewProduct}>Change product</button>
    </div>
  )
}