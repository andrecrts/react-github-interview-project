import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import App from './App';

function setup(): ShallowWrapper {
  return shallow(<App />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
