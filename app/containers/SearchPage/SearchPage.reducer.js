import { fromJS } from 'immutable';

import {
  GET_LISTINGS,
  GET_LISTINGS_SUCCESS,
  // GET_LISTINGS_ERROR
} from './SearchPage.constants';

const initialState = fromJS({
  data: [],
  loading: true,
  error: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return state
        .set('loading', true);
    case GET_LISTINGS_SUCCESS:
      return state
        .set('data', action.listings)
        .set('loading', false);
    default:
      return state;
  }
}

export default searchPageReducer;
