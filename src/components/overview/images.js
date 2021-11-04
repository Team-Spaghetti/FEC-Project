import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useProduct } from "../../contexts/ProductContext.js";

function Images() {
  const { styleReducer } = useProduct()
  const [styleVal, setStyleVal] = styleReducer
  const [images, setImages] = useState()

  useEffect(() => {
    if (styleVal.currentStyle) {
      var photos = Object.values(styleVal.currentStyle.photos)
      photos.map(obj => {
        if (!obj.image) {
          var image = obj.url
          obj.image = image
          delete obj.url
        }
      })
      setImages(photos)
    }
  }, [styleVal])

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="carousel">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          {images &&
            <Carousel
            data={images}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />}
        </div>
      </div>
    </div>
  );
}

export default Images;

