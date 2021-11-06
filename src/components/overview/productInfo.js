import React from "react";
import { useProduct } from "../../contexts/ProductContext.js";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function ProductInfo() {
  const { product, styleReducer } = useProduct();
  const [styleValue, setStyleValue] = styleReducer;
  return (
    <div className="product-info">
      <div>
        <p>Reviews: </p>
      </div>
      <div>
        <p>{product.category}</p>
        <h2>{product.name}</h2>
        <div>
          {styleValue.currentStyle && styleValue.currentStyle.sale_price ? (
            <div>
              <p className='original-price'>${styleValue.currentStyle.original_price}</p>
              <p className="sale-price">
                ${styleValue.currentStyle.sale_price}
              </p>
            </div>
          ) : styleValue.currentStyle ? (
            <p>${styleValue.currentStyle.original_price}</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div>
        <a href="https://facebook.com"><FacebookIcon /></a>
        <a href="https://twitter.com"><TwitterIcon /></a>
        <a href="https://pinterest.com"><PinterestIcon /></a>
      </div>
    </div>
  );
}
