import { fromJS } from 'immutable';

import * as types from './SnackBar.constants';

const initialState = fromJS({
  data: [],
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT_SNACKBAR:
      return state
        .set('data', [action.event]);
    case types.CLEAR_SNACKBAR:
      return state
        .set('data', []);
    default:
      return state;
  }
}

export default searchPageReducer;
