import { fromJS } from 'immutable';

import {
  GET_LISTING_DETAIL,
  GET_LISTING_DETAIL_SUCCESS,
  GET_LISTING_DETAIL_ERROR,
} from './ListingDetailPage.constants';

const initialState = fromJS({
  data: {},
  loading: true,
  error: false,
});

function lisitingDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTING_DETAIL:
      return state
        .set('loading', true);
    case GET_LISTING_DETAIL_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false);
    case GET_LISTING_DETAIL_ERROR:
      return state
        .set('error', action.err)
        .set('loading', false);
    default:
      return state;
  }
}

export default lisitingDetailReducer;
