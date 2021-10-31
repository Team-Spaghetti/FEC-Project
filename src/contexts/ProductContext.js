import React, { useContext, useState } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export function useProduct() {
  return useContext(ProductContext);
}

// export function useReviews() {
//   return useContext(ReviewsContext);
// }

export function ProductProvider({ children }) {
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState(38333);

  function setNewProduct() {
    axios.get(`http://localhost:3000/products/${productId}`)
      .then(response => {
        console.log(response.data)
        setProduct(response.data.id)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <ProductContext.Provider value={{ product: product, setNewProduct: setNewProduct }}>
      {children}
    </ProductContext.Provider>
  )
}