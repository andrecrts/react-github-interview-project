import { INVERT_FLAG } from 'Types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INVERT_FLAG:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};
