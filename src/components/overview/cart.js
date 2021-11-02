import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function Cart() {
  return (
    <div>
      <div>
        <label>Size Selector</label>
        <select>
          <option>XS</option>
        </select>
        <br></br>

        <label>Quantity Selector</label>
        <select>
          <option>1</option>
        </select>
      </div>

      <div>
        <button>Add to Cart!</button>
      </div>
    </div>
  )
}