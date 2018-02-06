
import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import request from 'utils/request';
import { apiUrl } from 'config/index';

import { GET_LISTING_DETAIL, SUBMIT_SCHEDULE_VIEWING } from './ListingDetailPage.constants';
import { detailLoaded, detailError, submitScheduleViewingError, submitScheduleViewingSuccess } from './ListingDetailPage.actions';
import { makeSelectScheduleViewingData } from './ListingDetailPage.selectors';
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

export default function* watchAll() {
  yield all([
    yield takeLatest(SUBMIT_SCHEDULE_VIEWING, scheduleViewing),
    yield takeLatest(GET_LISTING_DETAIL, getListingDetail),
  ]);
}
