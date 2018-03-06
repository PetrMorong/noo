import { fromJS } from 'immutable';

import * as types from './CreateAccountPage.constants';

const initialState = fromJS({
  loading: true,
  error: false,
});

function createAccountReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ACCOUNT:
      return state
        .set('submitting', true);
    case types.CREATE_ACCOUNT_ERROR:
      return state
        .set('error', true)
        .set('submitting', false);
    case types.CREATE_ACCOUNT_SUCCESS:
      return state
        .set('error', false)
        .set('submitting', false);
    default:
      return state;
  }
}

export default createAccountReducer;
