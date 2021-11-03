import React from "react";
import { useProduct } from "../../contexts/ProductContext.js";

export default function ProductInfo() {
  const { product, styleReducer } = useProduct();
  const [styleValue, setStyleValue] = styleReducer;
  return (
    <div>
      <div>
        <p>Reviews: </p>
      </div>
      <div>
        <p>Product Category: {product.category}</p>
        <h2>Product Name: {product.name}</h2>
        <div>
          {styleValue.currentStyle && styleValue.currentStyle.sale_price ? (
            <div>
              <p className='original-price'>Original Price: {styleValue.currentStyle.original_price}</p>
              <p className="sale-price">
                Sale Price: {styleValue.currentStyle.sale_price}
              </p>
            </div>
          ) : styleValue.currentStyle ? (
            <p>Original Price: {styleValue.currentStyle.original_price}</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div>
        <p>Share on social media!</p>
      </div>
    </div>
  );
}
