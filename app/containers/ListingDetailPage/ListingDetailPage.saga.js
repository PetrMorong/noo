
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { apiUrl } from 'config/index';

import { GET_LISTING_DETAIL } from './ListingDetailPage.constants';
import { detailLoaded, detailError } from './ListingDetailPage.actions';

export function* getListingDetail(action) {
  const requestURL = `${apiUrl}/listings/${action.id}`;
  try {
    const data = yield call(request, requestURL);
    yield put(detailLoaded(data));
  } catch (err) {
    yield put(detailError(err));
  }
}

export default function* watchGetListingDetail() {
  yield takeLatest(GET_LISTING_DETAIL, getListingDetail);
}
