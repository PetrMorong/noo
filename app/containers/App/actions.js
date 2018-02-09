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
