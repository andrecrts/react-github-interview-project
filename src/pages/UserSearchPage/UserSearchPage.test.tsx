import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import storeMock from '../../mocks/storeMock';
import { storeFactory } from '../../utils/testUtils';
import UserSearchPage from './UserSearchPage';

function setup(): ReactWrapper {
  const store = storeFactory(storeMock);
  return mount(
    <Provider store={store}>
      <UserSearchPage />
    </Provider>,
  );
}

describe('UserSearchPage', () => {
  it('should match snapshot', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
