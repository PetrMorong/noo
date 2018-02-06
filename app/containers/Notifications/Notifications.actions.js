import * as types from './Notifications.constants';

export function toggleNotifications() {
  return {
    type: types.TOGGLE_NOTIFICATIONS,
  };
}

export function getNotifications() {
  return {
    type: types.GET_NOTIFICATIONS,
  };
}

export function getNotificationsSuccess(data) {
  return {
    type: types.GET_NOTIFICATIONS_SUCCESS,
    data,
  };
}

export function getNotificationsError(err) {
  return {
    type: types.GET_NOTIFICATIONS_ERROR,
    err,
  };
}
