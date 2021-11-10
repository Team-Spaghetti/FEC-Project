import React from "react";
import { useProduct } from "../../contexts/ProductContext.js";
import Rating from "@mui/material/Rating";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "react-share";

export default function ProductInfo() {
  const { product, styleReducer, meta } = useProduct();
  const [styleValue, setStyleValue] = styleReducer;
  return (
    <div className="product-info">
      <div>
        <Rating
          value={meta.starRating || 0}
          precision={0.25}
          sx={{ color: "purple" }}
          readOnly
        />
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
              <p className="original-price">
                ${styleValue.currentStyle.original_price}
              </p>
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
        <FacebookShareButton
          url={
            styleValue.currentStyle
              ? styleValue.currentStyle.photos[0].url
              : "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          }
          quote={
            "BROS AND BRODETTES: FEAST YOUR EYES ON THIS AMAZING PRODUCT!!!"
          }
        >
          <FacebookIcon size={24} round={true}/>
        </FacebookShareButton>
        <TwitterShareButton
          url={
            styleValue.currentStyle
              ? `http://www.urban-octo-chainsaw.com`
              : "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          }
          title={`Hopefully, this doesn't offend you guys... `}
        >
          <TwitterIcon size={24} round={true}/>
        </TwitterShareButton>
        <PinterestShareButton
        url={`http://www.urban-octo-chainsaw.com`}
        media={
          styleValue.currentStyle
            ? styleValue.currentStyle.photos[0].url
            : "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        }>
          <PinterestIcon size={24} round={true}/>
        </PinterestShareButton>
      </div>
    </div>
  );
}
