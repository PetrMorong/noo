import { fromJS } from 'immutable';

import * as types from './ActivityPage.constants';

const initialState = fromJS({
  mode: types.LANDLORD,
  loadingListings: true,
  errorListings: false,
  listings: [],
  loadingListingsOffers: true,
  listingsOffers: [],
  errorListingsOffers: false,
  openCounterOfferModal: false,
  listingsStep: types.LISTINGS_STEP_LIST,
  selectedListing: {},
  selectedOffer: {},
});

function lisitingDetailReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_MODE:
      return state
        .set('mode', action.mode);
    case types.GET_LISTINGS_BY_USER_ID:
      return state
        .set('loadingListings', true);
    case types.GET_LISTINGS_BY_USER_ID_SUCCESS:
      return state
        .set('listings', action.data)
        .set('loadingListings', false);
    case types.GET_LISTINGS_BY_USER_ID_ERROR:
      return state
        .set('errorListings', action.err);
    case types.GET_LISTINGS_OFFERS:
      return state
        .set('loadingListingsOffers', true);
    case types.GET_LISTINGS_OFFERS_SUCCESS:
      return state
        .set('listingsOffers', action.data)
        .set('loadingListingsOffers', false);
    case types.GET_LISTINGS_OFFERS_ERROR:
      return state
        .set('errorListingsOffers', action.err);
    case types.TOGGLE_COUNTER_OFFER_MODAL:
      return state
        .set('openCounterOfferModal', !state.get('openCounterOfferModal'));
    case types.CHANGE_LISTINGS_STEP:
      return state
        .set('listingsStep', action.step);
    case types.SELECT_LISTING:
      return state
        .set('selectedListing', action.data);
    case types.SELECT_OFFER:
      return state
        .set('selectedOffer', action.data);
    case types.CLEAR_OFFERS:
      return state
        .set('listingsOffers', []);
    case types.SUBMIT_COUNTER_OFFER_SUCCESS:
      return state
      .set('openCounterOfferModal', !state.get('openCounterOfferModal'));
    default:
      return state;
  }
}

export default lisitingDetailReducer;
