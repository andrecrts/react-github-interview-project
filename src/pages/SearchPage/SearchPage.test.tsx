import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import SearchPage from './SearchPage';

function setup(): ShallowWrapper {
  return shallow(<SearchPage />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
