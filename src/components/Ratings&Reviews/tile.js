import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js';

export default function Tile() {
  const productContext = useProduct();


  return(
    <div>
      <h3>{productContext.product}</h3>
    </div>
  )
}