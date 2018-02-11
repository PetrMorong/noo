import { UNPUBLISH_LISTING, DELETE_LISTING } from 'containers/ActivityPage/ActivityPage.constants';
import * as types from './constants';

export function toggleSideMenu() {
  return {
    type: types.SIDE_MENU_TOGGLE,
  };
}
export function login() {
  return {
    type: types.USER_LOGIN,
  };
}
export function signOut() {
  return {
    type: types.USER_SIGN_OUT,
  };
}
export function toggleConfirmDialog(data) {
  return {
    type: types.TOGGLE_CONFIRM_DIALOG,
    data,
  };
}

// functions called by confirm dialog component must be stored here, eventhough they are form different reducer
export function unpublishListing() {
  return {
    type: UNPUBLISH_LISTING,
  };
}
export function deleteListing() {
  return {
    type: DELETE_LISTING,
  };
}
