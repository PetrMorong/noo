import * as types from './LoginPage.constants';

export function login() {
  return {
    type: types.LOGIN,
  };
}
export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error,
  };
}
export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user,
  };
}
