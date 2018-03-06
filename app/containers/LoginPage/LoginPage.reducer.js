import { fromJS } from 'immutable';

import * as types from './LoginPage.constants';

const initialState = fromJS({
  loading: true,
  error: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default loginReducer;
