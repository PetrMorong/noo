import * as types from './ListingDetailPage.constants';

export function getListingDetail(id) {
  return {
    type: types.GET_LISTING_DETAIL,
    id,
  };
}
export function detailLoaded(data) {
  return {
    type: types.GET_LISTING_DETAIL_SUCCESS,
    data,
  };
}
export function detailError(err) {
  return {
    type: types.GET_LISTING_DETAIL_ERROR,
    err,
  };
}

export function submitScheduleViewing() {
  return {
    type: types.SUBMIT_SCHEDULE_VIEWING,
  };
}
export function submitScheduleViewingSuccess(data) {
  // refetch blocked times
  return {
    type: types.SUBMIT_SCHEDULE_VIEWING_SUCCESS,
    data,
  };
}
export function submitScheduleViewingError(err) {
  return {
    type: types.SUBMIT_SCHEDULE_VIEWING_ERROR,
    err,
  };
}

export function handleToggleViewingMobile() {
  return {
    type: types.TOGGLE_VIEWING_MOBILE,
  };
}
export function handleToggleViewingSuccessDialog() {
  return {
    type: types.TOGGLE_VIEWING_SUCCESS_DIALOG,
  };
}

export function toggleOfferModal() {
  return {
    type: types.TOGGLE_OFFER_MODAL,
  };
}

export function getUserByEmail(email, index, personType) {
  return {
    type: types.GET_USER_BY_EMAIL,
    email,
    index,
    personType,
  };
}
export function getUserByEmailSuccess(data, index, personType) {
  return {
    type: types.GET_USER_BY_EMAIL_SUCCESS,
    data,
    index,
    personType,
  };
}
export function getUserByEmailError(err) {
  return {
    type: types.GET_USER_BY_EMAIL_ERROR,
    err,
  };
}

export function submitOffer() {
  return {
    type: types.SUBMIT_OFFER,
  };
}
export function submitOfferSuccess(data) {
  return {
    type: types.SUBMIT_OFFER_SUCCESS,
    data,
  };
}
export function submitOfferError(err) {
  return {
    type: types.SUBMIT_OFFER_ERROR,
    err,
  };
}
