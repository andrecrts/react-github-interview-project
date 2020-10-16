import { INVERT_FLAG } from 'Types';

export const changeLoadState = currentFlag => dispatch => {
  dispatch({
    type: INVERT_FLAG,
    payload: currentFlag
  });
};
