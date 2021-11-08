import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [product, setProduct] = useState("");
  const [styles, setStyles] = useState([]);
  const [meta, setMeta] = useState({});
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { styleId: null, currentStyle: null }
  );

  function getProduct() {
    axios
      .get("http://localhost:3000/products/38322")
      .then((response) => {
        setProduct(response.data);
        axios.get(`http://localhost:3000/reviews/meta?product_id=${response.data.id}`)
          .then(response => {
            const ratings = Object.values(response.data.ratings);
            var totalRatings = 0;
            var averageRating = 0;
            for (let i=0; i<ratings.length; i++) {
              var value = i+1;
              var numOfRatings = parseInt(ratings[i]);
              averageRating += value*numOfRatings;
              totalRatings += numOfRatings;
            }
            averageRating /= totalRatings;
            setMeta({meta: response.data, starRating: (Math.round(averageRating * 4))/4, averageRating: (Math.round(averageRating * 10))/10, totalRatings: totalRatings});
          })
          .catch((err) => {
            console.error(err);
          }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getStyles() {
    axios
      .get("http://localhost:3000/products/38322/styles")
      .then((response) => {
        setStyles(response.data.results);
        setState({ styleId: response.data.results[0].style_id });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getProduct();
    getStyles();
  }, []);

  useEffect(() => {
    var currentStyle;
    for (const style of styles) {
      if (Object.values(style).includes(state.styleId)) {
        currentStyle = style;
      }
    }
    setState({
      currentStyle: currentStyle,
    });
  }, [state.styleId]);

  return (
    <ProductContext.Provider
      value={{
        product: product,
        styles: styles,
        styleReducer: [state, setState],
        meta: meta
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
