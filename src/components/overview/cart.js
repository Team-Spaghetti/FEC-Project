import React, { useState, useEffect } from "react";
import { useProduct } from "../../contexts/ProductContext.js";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Cart() {
  const { styleReducer } = useProduct();
  const [stateVal, setStateVal] = styleReducer;
  const [skus, setSkus] = useState();
  const [sku, setSku] = useState();
  const [quantity, setQuantity] = useState();
  const [selected, setSelected] = useState("");

  // Set SKUs only after currentStyle has loaded
  useEffect(() => {
    if (stateVal.currentStyle) {
      setSkus(stateVal.currentStyle.skus);
    }
    if (sku) {
      setSelected("");
    }
    if (quantity) {
      setQuantity();
    }
  }, [stateVal.currentStyle]);

  //Set quantity amount after size change
  useEffect(() => {
    if (sku) {
      var quantArr = [];
      var quant = skus[sku].quantity;
      for (var i = 1; i < quant + 1; i++) {
        quantArr.push(i);
        if (i > 14) {
          break;
        }
      }
      setQuantity(quantArr);
    }
  }, [sku]);

  //Change current SKU based on size
  function setSkuOnChange(e) {
    var skus = Object.keys(stateVal.currentStyle.skus);
    setSku(parseInt(skus[e.target.value]));
    setSelected(e.target.value);
  }

  //Add to cart
  function addToCart(e) {
    e.preventDefault();
    if (!sku || !quantity) {
      alert('Please select size!')
    } else {    axios
      .post("http://localhost:3000/cart", {
        sku_id: sku,
      })
      .then((response) => {
        console.log("Added to cart!");
      })
      .catch((err) => {
        console.error(err);
      });}
  }

  return (
    <div>
      <div>
        <form onSubmit={addToCart} className="cart-form">
          <label>Size Selector</label>
          <select value={selected} onChange={setSkuOnChange}>
            <option>Select Size</option>
            {skus &&
              Object.values(skus).map((sku, index) => {
                return (
                  <option key={index} value={index}>
                    {sku.size}
                  </option>
                );
              })}
          </select>
          <br></br>
          <label>Quantity Selector</label>
          <select name="quantity">
            {skus &&
              sku &&
              quantity &&
              quantity.map((quant) => {
                return (
                  <option key={quant} value={quant}>
                    {quant}
                  </option>
                );
              })}
          </select>
          <button type="submit">Add to Cart!</button>
        </form>
      </div>
    </div>
  );
}
