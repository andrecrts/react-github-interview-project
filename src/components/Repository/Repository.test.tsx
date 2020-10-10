import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { CombinedState, Store } from 'redux';
import storeMock from '../../mocks/storeMock';
import { RootState } from '../../types/states';
import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import Repository, { RepositoryProps } from './Repository';

const repository = {
  id: 1,
  name: 'Test',
  owner: {
    login: 'test',
  },
  language: '',
  updated_at: '2020-09-28T14:20:13Z',
  stargazers_count: 100,
  description: 'Test description',
};

const defaultProps: RepositoryProps = {
  repository,
};

function setup(store, props = {}): ReactWrapper {
  return mount(
    <Provider store={store}>
      <Repository {...defaultProps} {...props} />
    </Provider>,
  );
}

describe('Repository Component', () => {
  let wrapper: ReactWrapper;
  let store: Store<CombinedState<RootState>>;

  beforeEach(() => {
    store = storeFactory(storeMock);
    wrapper = setup(store);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders input box', () => {
    const title = findByTestAttr(wrapper, 'title');
    expect(title.length).toBe(2);
  });

  it('not renders language', () => {
    const language = findByTestAttr(wrapper, 'language');
    expect(language.length).toBe(0);
  });

  it('should add repo to bookmarks', () => {
    const toggleButton = findByTestAttr(wrapper, 'toggleButton').at(0);
    toggleButton.simulate('click');
    expect(store.getState().bookmarksReducer.bookmarks.length).toBe(1);
  });

  it('should remove repo from bookmarks', () => {
    store = storeFactory({
      ...storeMock,
      bookmarksReducer: {
        bookmarks: [repository],
      },
    });
    wrapper = setup(store, { bookmarked: true });
    const toggleButton = findByTestAttr(wrapper, 'toggleButton').at(0);
    toggleButton.simulate('click');
    expect(store.getState().bookmarksReducer.bookmarks.length).toBe(0);
  });
});
