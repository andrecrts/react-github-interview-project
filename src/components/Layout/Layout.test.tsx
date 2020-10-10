import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Layout from './Layout';

function setup(): ShallowWrapper {
  return shallow(<Layout />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
