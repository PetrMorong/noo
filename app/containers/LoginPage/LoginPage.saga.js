import { call, takeLatest, all, select, put } from 'redux-saga/effects';
import { apolloClient } from 'api/AppoloProxy';
import gql from 'graphql-tag';
import { push } from 'react-router-redux';

import * as types from './LoginPage.constants';
import { loginError, loginSuccess } from './LoginPage.actions';

export function* login() {
  const { email, password } = yield select((state) => state.getIn(['form']).loginForm.values);
  const data = yield call(() => apolloClient.mutate({
    mutation: gql`
      mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          payload {
            token
            user {
              email
              firstName
              lastName
              phoneNumber
            }
          }
          error {
            field
            msg
          }
        }
      }
    `,
    variables: { email, password },
  }));
  const { error, payload } = data.data.login;
  if (payload) {
    window.localStorage.setItem('@nookpad/token', payload.token);
    yield put(loginSuccess(payload.user));
    yield put(push('/'));
  } else {
    yield put(loginError(error));
  }
}

export default function* watchAll() {
  yield all([
    yield takeLatest(types.LOGIN, login),
  ]);
}
