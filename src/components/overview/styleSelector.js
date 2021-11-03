import React from "react";
import { useProduct } from "../../contexts/ProductContext.js";

export default function StyleSelector() {
  const { styles, styleReducer } = useProduct();
  const [styleValue, setStyleValue] = styleReducer;

  function setStyleOnClick(e) {
    setStyleValue({
      styleId: parseInt(e.target.id),
    });
  }

  return (
    <div>
      {styles.map(style => {
        return (
          <img
            key={style.style_id}
            id={style.style_id}
            onClick={setStyleOnClick}
            className="thumbnails"
            src={style.photos[0].thumbnail_url}
          ></img>
        );
      })}
    </div>
  );
}
