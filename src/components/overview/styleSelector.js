import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function StyleSelector() {
  const { styles, styleId, currentStyle } = useProduct()
  const [styleIdValue, setStyleIdValue] = styleId
  const [currentStyleValue, setCurrentStyleValue] = currentStyle

  function setStyleOnClick(e) {
    setStyleIdValue(parseInt(e.target.id));
    for (const style of styles) {
      if (Object.values(style).includes(styleIdValue)) {
        setCurrentStyleValue(style)
      }
    }
  }

  return (
    <div>
      {styles.map((style, index) => {
        return (
          <img key={style.style_id}
          id={style.style_id}
          onClick={(e) => { setStyleOnClick(e)}}
          className='thumbnails'
          src={style.photos[0].thumbnail_url}>
          </img>
        )
      })}
    </div>
  )
}