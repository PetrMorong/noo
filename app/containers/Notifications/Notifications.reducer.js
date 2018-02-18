import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import * as types from './Notifications.constants';

const initialState = fromJS({
  opened: false,
  data: [],
  error: false,
  loading: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_NOTIFICATIONS:
      return state
        .set('opened', !state.get('opened'));
    case LOCATION_CHANGE:
      return state
        .set('opened', false);
    case types.GET_NOTIFICATIONS:
      return state
        .set('loading', true);
    case types.GET_NOTIFICATIONS_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false);
    case types.GET_NOTIFICATIONS_ERROR:
      return state
        .set('error', action.err)
        .set('loading', false);
    default:
      return state;
  }
}

export default searchPageReducer;
