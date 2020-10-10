import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import UserSearchPage from './UserSearchPage';

function setup(): ShallowWrapper {
  return shallow(<UserSearchPage />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
