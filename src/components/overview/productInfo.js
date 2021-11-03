import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function ProductInfo() {
  const { product, styleReducer } = useProduct()
  const [styleValue, setStyleValue] = styleReducer
  console.log(styleValue)
  return (
    <div>
      <div>
        <p>Reviews: </p>
      </div>
      <div>
        <p>Product Category: {product.category}</p>
        <h2>Product Name: {product.name}</h2>
        {styleValue.currentStyle &&
          <p>Original Price: {styleValue.currentStyle.original_price}</p>
        }
      </div>
      <div>
        <p>Share on social media!</p>
      </div>
    </div>
  )
}
