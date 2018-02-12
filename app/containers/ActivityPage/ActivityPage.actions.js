import * as types from './ActivityPage.constants';

export function changeActivityMode(mode) {
  return {
    type: types.CHANGE_MODE,
    mode,
  };
}

export function getListingByUserId() {
  return {
    type: types.GET_LISTINGS_BY_USER_ID,
  };
}
export function getListingByUserIdError(err) {
  return {
    type: types.GET_LISTINGS_BY_USER_ID_ERROR,
    err,
  };
}
export function getListingByUserIdSuccess(data) {
  return {
    type: types.GET_LISTINGS_BY_USER_ID_SUCCESS,
    data,
  };
}

export function getListingsOffers(id) {
  return {
    type: types.GET_LISTINGS_OFFERS,
    id,
  };
}
export function getListingsOffersError(err) {
  return {
    type: types.GET_LISTINGS_OFFERS_ERROR,
    err,
  };
}
export function getListingsOffersSuccess(data) {
  return {
    type: types.GET_LISTINGS_OFFERS_SUCCESS,
    data,
  };
}

export function toggleCounterOfferModal(data) {
  return {
    type: types.TOGGLE_COUNTER_OFFER_MODAL,
    data,
  };
}

export function submitCounterOffer() {
  return {
    type: types.SUBMIT_COUNTER_OFFER,
  };
}
export function handleSubmitCounterOfferSuccess(data) {
  return {
    type: types.SUBMIT_COUNTER_OFFER_SUCCESS,
    data,
  };
}
export function handleSubmitCounterOfferError(err) {
  return {
    type: types.SUBMIT_COUNTER_OFFER_ERROR,
    err,
  };
}

export function changeListingsStep(step) {
  return {
    type: types.CHANGE_LISTINGS_STEP,
    step,
  };
}

export function selectListing(data) {
  return {
    type: types.SELECT_LISTING,
    data,
  };
}

export function selectOffer(data) {
  return {
    type: types.SELECT_OFFER,
    data,
  };
}

export function respondOffer(respondType) {
  return {
    type: types.RESPOND_OFFER,
    respondType,
  };
}

export function clearOffers() {
  return {
    type: types.CLEAR_OFFERS,
  };
}

export function changeCalendarStartDate(date) {
  return {
    type: types.CHANGE_CALENDAR_START_DATE,
    date,
  };
}

export function toggleCalendar(date) {
  return {
    type: types.TOGGLE_CALENDAR,
    date,
  };
}

export function getViewings(date) {
  return {
    type: types.GET_VIEWINGS,
    date,
  };
}
export function getViewingsSuccess(data) {
  return {
    type: types.GET_VIEWINGS_SUCCESS,
    data,
  };
}
export function getViewingsError(err) {
  return {
    type: types.GET_VIEWINGS_ERROR,
    err,
  };
}

export function toggleViewingDetail(item) {
  return {
    type: types.TOGGLE_VIEWING_DETAIL,
    item,
  };
}
