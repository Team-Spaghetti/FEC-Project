import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function ProductInfo() {
  const { product, styleId, currentStyle } = useProduct()
  const [styleIdValue, setStyleIdValue] = styleId
  const [currentStyleValue, setCurrentStyleValue] = currentStyle
  return (
    <div>
      <div>
        <p>Reviews: </p>
      </div>
      <div>
        <p>Product Category: {product.category}</p>
        <h2>Product Name: {product.name}</h2>
        <p>Original Price: {currentStyleValue.original_price}</p>
      </div>
      <div>
        <p>Share on social media!</p>
      </div>
    </div>
  )
}
