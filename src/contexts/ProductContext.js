import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [product, setProduct] = useState("");
  const [styles, setStyles] = useState([]);
  const [styleId, setStyleId] = useState();
  const [currentStyle, setCurrentStyle] = useState([]);

  function getProduct() {
    axios
      .get("http://localhost:3000/products/38322")
      .then((response) => {
        setProduct(response.data);
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
        setStyleId(response.data.results[0].style_id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getProduct();
    getStyles();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product: product,
        styles: styles,
        styleId: [styleId, setStyleId],
        currentStyle: [currentStyle, setCurrentStyle],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
