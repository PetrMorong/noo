
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { apiUrl } from 'config/index';

import { GET_LISTINGS } from './SearchPage.constants';
import { listingsLoaded, listingsError } from './SearchPage.actions';

export function* lol() {
  console.log(listingsLoaded, listingsError);

  const requestURL = `${apiUrl}/listings`;
  try {
    const listings = yield call(request, requestURL);
    yield put(listingsLoaded(listings));
  } catch (err) {
    yield put(listingsError(err));
  }
}

export default function* getListings() {
  yield takeLatest(GET_LISTINGS, lol);
}
