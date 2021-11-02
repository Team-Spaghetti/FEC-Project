import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../src/components/overview/overview.js'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test ('overview displays correct product ID after click', () => {
  const overview = shallow(
    <Overview />
  );
});