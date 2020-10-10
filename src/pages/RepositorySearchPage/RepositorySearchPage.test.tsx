import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import RepositorySearchPage from './RepositorySearchPage';

function setup(): ShallowWrapper {
  return shallow(<RepositorySearchPage />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
