import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Repository from './Repository';

function setup(): ShallowWrapper {
  return shallow(<Repository />);
}

test('should match snapshot', () => {
  const wrapper = setup();
  expect(wrapper).toMatchSnapshot();
});
