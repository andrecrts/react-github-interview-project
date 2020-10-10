import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import BookmarksPage from './BookmarksPage';

function setup(): ShallowWrapper {
  return shallow(<BookmarksPage />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
