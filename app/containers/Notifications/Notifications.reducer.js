import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import * as types from './Notifications.constants';

const initialState = fromJS({
  opened: false,
  data: [],
  error: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_NOTIFICATIONS:
      return state
        .set('opened', !state.get('opened'));
    case LOCATION_CHANGE:
      return state
        .set('opened', false);
    case types.GET_NOTIFICATIONS_SUCCESS:
      return state
        .set('data', action.data);
    case types.GET_NOTIFICATIONS_ERROR:
      return state
        .set('error', action.err);
    default:
      return state;
  }
}

export default searchPageReducer;
