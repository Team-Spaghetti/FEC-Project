import React, { useState, useEffect } from 'react';
import { useProduct } from "../../contexts/ProductContext.js";
import ImageGallery from 'react-image-gallery';

function Images() {
  const { styleReducer } = useProduct()
  const [styleVal, setStyleVal] = styleReducer
  const [images, setImages] = useState()

  useEffect(() => {
    if (styleVal.currentStyle) {
      var photos = Object.values(styleVal.currentStyle.photos)
      photos.map(obj => {
        obj.original = obj.url
        obj.thumbnail = obj.thumbnail_url
        obj.originalHeight = 550
        // obj.thumbnailHeight = 100
      })
      setImages(photos)
    }
  }, [styleVal])

  return (
    images ? <ImageGallery items={images} thumbnailPosition='left' useBrowserFullscreen={false}/> : <p>No product Selected</p>
  )
}

export default Images;

