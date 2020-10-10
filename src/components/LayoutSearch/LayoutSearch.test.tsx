import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import LayoutSearch from './LayoutSearch';

function setup(): ShallowWrapper {
  return shallow(<LayoutSearch />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
