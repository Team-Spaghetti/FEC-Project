import React from 'react';
import { useProduct } from '../../contexts/ProductContext.js'

export default function StyleSelector() {
  const { styles, styleReducer } = useProduct()
  const [stateValue, setStateValue] = styleReducer

  function setStyleOnClick(e) {
    var currentStyle;
    for (const style of styles) {
      if (Object.values(style).includes(stateValue.styleId)) {
        currentStyle = style
      }
    }
    setStateValue({
      currentStyle: currentStyle,
      styleId: parseInt(e.target.id)
    })
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