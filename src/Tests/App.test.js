import React from 'react';
// import { expect } from 'chai'
// import ReactDOM from 'react-dom';
import sinon from 'sinon'
import { shallow } from 'enzyme';

import App from '../Components/App';
import Waste from '../Components/Waste';
import Search from '../Components/Search';
import Banner from '../Components/Banner';


it('renders App without crashing', () => {
  const wrapper = shallow(<App/>)

  expect(wrapper.find(<Banner></Banner>)).toBeTruthy();    
  expect(wrapper.find(<Search></Search>)).toBeTruthy();
  expect(wrapper.find(<Waste></Waste>)).toBeTruthy();
});
