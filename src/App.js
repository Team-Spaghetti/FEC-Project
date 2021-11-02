import Button from '@mui/material/Button';
import React from "react";
import Overview from './components/overview/overview.js'
import { ProductProvider } from './contexts/ProductContext.js'

function App() {
  return (
    <ProductProvider>
      <Overview />
    </ProductProvider>
  )
}

export default (App);
