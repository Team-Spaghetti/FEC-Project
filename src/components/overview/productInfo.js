import React from "react";
import { useProduct } from "../../contexts/ProductContext.js";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Rating from '@mui/material/Rating';

export default function ProductInfo() {
  const { product, styleReducer, meta } = useProduct();
  const [styleValue, setStyleValue] = styleReducer;
  return (
    <div className="product-info">
      <div>
        <Rating value={meta.starRating || 0} precision={0.25} sx={{color:'purple'}} readOnly/>
      </div>
      <div className="product-name">
        <p>{product.category}</p>
        <h2>{product.name}</h2>
        <div className="product-slogan-and-description">
          <p className="slogan">{product.slogan}</p>
          <p className="description">{product.description}</p>
        </div>
        <div className="prices">
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
