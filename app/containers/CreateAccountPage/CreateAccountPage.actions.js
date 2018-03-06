import * as types from './CreateAccountPage.constants';

export function createAccount() {
  return {
    type: types.CREATE_ACCOUNT,
  };
}
export function createAccountError(err) {
  return {
    type: types.CREATE_ACCOUNT_ERROR,
    err,
  };
}
export function createAccountSuccess() {
  return {
    type: types.CREATE_ACCOUNT_SUCCESS,
  };
}
