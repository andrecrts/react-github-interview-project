import { createTypes, actionCreator } from 'redux-action-creator';

export const types = createTypes(
  [
    'CREATE',
    'DELETE',
  ],
  'BOOKMARK',
);

export const actions = {
  createBookMark: actionCreator(types.CREATE, 'data'),
  deleteBookMark: actionCreator(types.DELETE, 'data'),
};

