import { call, put, takeLatest, all } from 'redux-saga/effects';
import { apolloClient } from 'api/AppoloProxy';
import gql from 'graphql-tag';
import { loginSuccess } from '../LoginPage/LoginPage.actions';
import { noUserFound } from './actions';

import * as types from './constants';

export function* checkToken() {
  const tokenFromStorage = window.localStorage.getItem('@nookpad/token');
  if (tokenFromStorage) {
    try {
      // to do get notifications as well
      const data = yield call(() => apolloClient.mutate({
        mutation: gql`
          mutation($token: String!) {
            refreshToken(token: $token) {
              token
              user {
                email
                firstName
                lastName
                phoneNumber
              }
            }
          }
        `,
        variables: { token: tokenFromStorage },
      }));
      const { token, user } = data.data.refreshToken;
      window.localStorage.setItem('@nookpad/token', token);
      yield put(loginSuccess(user));
    } catch (e) {
      yield put(noUserFound());
    }
  } else {
    yield put(noUserFound());
  }
}

export default function* watchAll() {
  yield all([
    yield takeLatest(types.CHECK_TOKEN, checkToken),
  ]);
}
