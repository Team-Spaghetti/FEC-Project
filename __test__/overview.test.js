import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductInfo from '../src/components/overview/productInfo.js';
import { ProductProvider } from '../src/contexts/ProductContext.js'

Enzyme.configure({ adapter: new Adapter() });


const wrapper = mount(
  <ProductProvider>
    <ProductInfo />
  </ProductProvider>
)

// describe("React testing", () => {
//   test("test", () => {
//     console.log(wrapper.debug())
//   })
// });