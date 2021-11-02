import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function ProductInfo() {
  const { product } = useProduct()
  return (
    <div>
      <div>
        <p>Reviews: </p>
      </div>
      <div>
        <p>Product Category: {product.category}</p>
        <h2>Product Name: {product.name}</h2>
        <p>Original Price: </p>
      </div>
      <div>
        <p>Share on social media!</p>
      </div>
    </div>
  )
}
