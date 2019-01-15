import React from 'react';
import { expect } from 'chai'
// import ReactDOM from 'react-dom';
import sinon from 'sinon'
import { shallow } from 'enzyme';

import App from '../Components/App';
import Search from '../Components/Search';


it('Search without crashing, pressing button', () => {
  const wrapper = shallow(<Search/>)
  const wrapperApp = shallow(<App/>)
  wrapper.setState({ search: 'takeout' });

  wrapper.find('button').simulate('click');
  console.log(wrapper.state());
  console.log(wrapperApp.state());
});
