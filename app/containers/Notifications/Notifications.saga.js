import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { apiUrl } from 'config/index';
import { makeSelectUser } from 'containers/App/selectors';
import { GET_NOTIFICATIONS } from 'containers/Notifications/Notifications.constants';
import { getNotificationsSuccess, getNotificationsError } from './Notifications.actions';

export function* getNotifications() {
  const user = yield select(makeSelectUser());
  const requestURL = `${apiUrl}/Notifications?userId=${user.get('id')}`;
  // TODO get onl yfirst 10 norifications, figure out pagination
  try {
    const data = yield call(request, requestURL, 'GET');
    yield put(getNotificationsSuccess(data));
  } catch (err) {
    yield put(getNotificationsError(err));
  }
}


export default function* watchAllNotif() {
  yield takeLatest(GET_NOTIFICATIONS, getNotifications);
}
