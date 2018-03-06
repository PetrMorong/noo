import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import request from 'utils/request';
import { apiUrl } from 'config/index';
import { addEventSnackbar } from 'components/SnackBar/SnackBar.actions';

import {
  GET_LISTING_DETAIL,
  SUBMIT_SCHEDULE_VIEWING,
  GET_USER_BY_EMAIL,
  SUBMIT_OFFER,
} from './ListingDetailPage.constants';
import {
  detailLoaded,
  detailError,
  submitScheduleViewingError,
  submitScheduleViewingSuccess,
  getUserByEmailSuccess,
  getUserByEmailError,
  submitOfferSuccess,
  submitOfferError,
} from './ListingDetailPage.actions';
import { makeSelectScheduleViewingData, makeSelectSentOfferData } from './ListingDetailPage.selectors';
import { makeSelectNotificationData } from '../Notifications/Notifications.selectors';

export function* getListingDetail(action) {
  const requestURL = `${apiUrl}/listings/${action.id}`;
  try {
    const data = yield call(request, requestURL, 'GET');
    yield put(detailLoaded(data));
  } catch (err) {
    yield put(detailError(err));
  }
}

export function* scheduleViewing() {
  const requestURL = `${apiUrl}/Viewings`;
  const requestURLNotification = `${apiUrl}/Notifications`;

  const dataToSend = yield select(makeSelectScheduleViewingData());
  const notificationData = yield select(makeSelectNotificationData());
  try {
    const data = yield call(request, requestURL, 'POST', dataToSend);
    yield call(request, requestURLNotification, 'POST', notificationData);
    // add time to blocked dates for listing
    yield put(submitScheduleViewingSuccess(data));
  } catch (err) {
    // handle when time is blocked
    // create success / error message
    yield put(submitScheduleViewingError(err));
  }
}

export function* getUserByEmail(action) {
  const requestURL = `${apiUrl}/Users?email=${action.email}`;
  try {
    const data = yield call(request, requestURL, 'GET');
    yield put(getUserByEmailSuccess(data, action.index, action.personType));
  } catch (err) {
    yield put(getUserByEmailError(err));
  }
}

export function* submitOffer(action) {
  const requestURL = `${apiUrl}/Offers`;
  const dataToSend = yield select(makeSelectSentOfferData());
  try {
    // TODO sent proofOfIncome to file API and add response url string to the dataToSend
    const data = yield call(request, requestURL, 'POST', dataToSend);
    yield put(addEventSnackbar({ message: 'Offer was sent' }));
    yield put(submitOfferSuccess(data, action.index, action.personType));
  } catch (err) {
    yield put(submitOfferError(err));
  }
}

export default function* watchAll() {
  yield all([
    yield takeLatest(SUBMIT_SCHEDULE_VIEWING, scheduleViewing),
    yield takeLatest(GET_LISTING_DETAIL, getListingDetail),
    yield takeLatest(GET_USER_BY_EMAIL, getUserByEmail),
    yield takeLatest(SUBMIT_OFFER, submitOffer),
  ]);
}
