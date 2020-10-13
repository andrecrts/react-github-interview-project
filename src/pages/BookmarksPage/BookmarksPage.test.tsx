import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import storeMock from '../../mocks/storeMock';
import { storeFactory } from '../../utils/testUtils';
import BookmarksPage from './BookmarksPage';

function setup(): ReactWrapper {
  const store = storeFactory(storeMock);
  return mount(
    <Provider store={store}>
      <BookmarksPage />
    </Provider>,
  );
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
