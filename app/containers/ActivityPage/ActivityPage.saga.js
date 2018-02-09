import { call, put, takeLatest, select, all } from 'redux-saga/effects';
import request from 'utils/request';
import { apiUrl } from 'config/index';
import { makeSelectUser } from 'containers/App/selectors';
import { addEventSnackbar } from 'components/SnackBar/SnackBar.actions';

import {
  makeSelectSelectedOffer,
  makeSelectCounterOfferForm,
} from './ActivityPage.selectors';
import {
  GET_LISTINGS_BY_USER_ID,
  GET_LISTINGS_OFFERS,
  SUBMIT_COUNTER_OFFER,
  RESPOND_OFFER,
} from './ActivityPage.constants';
import {
  getListingByUserIdSuccess,
  getListingByUserIdError,
  getListingsOffersSuccess,
  getListingsOffersError,
  handleSubmitCounterOfferSuccess,
  handleSubmitCounterOfferError,
} from './ActivityPage.actions';

export function* getListingByUserId() {
  const user = yield select(makeSelectUser());
  const requestURL = `${apiUrl}/Listings?userId=${user.get('id')}`;
  // TODO get only first 10 listings, figure out pagination
  try {
    const data = yield call(request, requestURL, 'GET');
    yield put(getListingByUserIdSuccess(data));
  } catch (err) {
    yield put(getListingByUserIdError(err));
  }
}

export function* getListingsOffers(action) {
  const requestURL = `${apiUrl}/Offers?listingId=${action.id}`;
  // TODO get only 5 best by seding params, another params for all, figure out pagination
  try {
    const data = yield call(request, requestURL, 'GET');
    yield put(getListingsOffersSuccess(data));
  } catch (err) {
    yield put(getListingsOffersError(err));
  }
}

export function* handleSubmitCounterOffer() {
  const offer = yield select(makeSelectSelectedOffer());
  const form = yield select(makeSelectCounterOfferForm());
  const dataToSend = {
    ...offer,
    price: form.values.price,
    moveInDate: form.values.moveInDate,
    status: 'counteredByLandlord',
  };
  const requestURL = `${apiUrl}/Offers/${dataToSend.id}`;
  try {
    const data = yield call(request, requestURL, 'PUT', dataToSend);
    yield put(handleSubmitCounterOfferSuccess(data));
    yield put(addEventSnackbar({ message: 'Offer was countered' }));
    // TODO refresh offer detail with new data
  } catch (err) {
    yield put(handleSubmitCounterOfferError(err));
  }
}

export function* respondOffer(action) {
  // const offer = yield select(makeSelectSelectedOffer());
  /* const dataToSend = {
    ...offer,
    status: action.respondType === 'refuse' ? 'refused' : 'acceptedByLandlord',
  }; */
  // const requestURL = `${apiUrl}/Offers/${dataToSend.id}`;
  try {
    // const data = yield call(request, requestURL, 'PUT', dataToSend);
    yield put(addEventSnackbar({ message: `Offer was ${action.respondType === 'refuse' ? 'refused' : 'accepted'}` }));
    // TODO refresh offer detail with new data
  } catch (err) {
    // TODO err handling
  }
}

export default function* watchAll() {
  yield all([
    yield takeLatest(GET_LISTINGS_BY_USER_ID, getListingByUserId),
    yield takeLatest(GET_LISTINGS_OFFERS, getListingsOffers),
    yield takeLatest(SUBMIT_COUNTER_OFFER, handleSubmitCounterOffer),
    yield takeLatest(RESPOND_OFFER, respondOffer),
  ]);
}
