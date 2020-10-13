import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import storeMock from '../../mocks/storeMock';
import { storeFactory } from '../../utils/testUtils';
import RepositorySearchPage from './RepositorySearchPage';

function setup(): ReactWrapper {
  const store = storeFactory(storeMock);
  return mount(
    <Provider store={store}>
      <RepositorySearchPage />
    </Provider>,
  );
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
