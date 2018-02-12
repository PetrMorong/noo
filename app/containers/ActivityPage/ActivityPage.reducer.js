import { fromJS } from 'immutable';
import moment from 'moment';
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
  calendarStartDate: moment().startOf('day').format(),
  openCalendar: true,
  viewings: [],
  loadingViewings: true,
  vieiwingsError: false,
  viewingDetail: false,
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
    case types.CHANGE_CALENDAR_START_DATE:
      return state
      .set('calendarStartDate', action.date);
    case types.TOGGLE_CALENDAR:
      return state
      .set('openCalendar', !state.get('openCalendar'));
    case types.GET_VIEWINGS:
      return state
      .set('loadingViewings', true);
    case types.GET_VIEWINGS_SUCCESS:
      return state
      .set('viewings', action.data)
      .set('loadingViewings', false);
    case types.GET_VIEWINGS_ERROR:
      return state
      .set('vieiwingsError', action.err)
      .set('loadingViewings', false);
    case types.TOGGLE_VIEWING_DETAIL:
      return state
      .set('viewingDetail', state.get('viewingDetail') ? false : action.item);
    default:
      return state;
  }
}

export default lisitingDetailReducer;
