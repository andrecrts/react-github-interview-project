import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LayoutSearch from './LayoutSearch';

function setup(): ShallowWrapper {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);
  return shallow(
    <Router history={history}>
      <LayoutSearch />
    </Router>,
  );
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
