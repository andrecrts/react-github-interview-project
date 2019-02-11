import { createTypes, actionCreator } from 'redux-action-creator';

const types = createTypes(
  [
    'CREATE',
    'DELETE',
  ],
  'BOOKMARK',
);

const actions = {
  createBookMark: actionCreator(types.CREATE, 'data'),
  editCar: actionCreator(types.DELETE, 'data'),
};

export default { types, actions };
