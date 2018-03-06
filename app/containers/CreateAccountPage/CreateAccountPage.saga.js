import { call, takeLatest, all, select, put } from 'redux-saga/effects';
import { apolloClient } from 'api/AppoloProxy';
import gql from 'graphql-tag';
import { push } from 'react-router-redux';

import { addEventSnackbar } from 'components/SnackBar/SnackBar.actions';
import { createAccountError, createAccountSuccess } from './CreateAccountPage.actions';
import * as types from './CreateAccountPage.constants';

export function* createAccount() {
  const { firstName, lastName, email, phoneNumber, password } = yield select((state) => state.getIn(['form']).createAccountForm.values);
  try {
    const data = yield call(() => apolloClient.mutate({
      mutation: gql`
        mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $phoneNumber: String!) {
          signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, phoneNumber: $phoneNumber) {
            token
          }
        }
      `,
      variables: { firstName, lastName, email, phoneNumber, password },
    }));

    // get user as well
    window.localStorage.setItem('@nookpad/token', data.data.signup.token);
    yield put(addEventSnackbar({ message: 'Account was created.' }));
    yield put(createAccountSuccess());
    yield put(push('/login'));
  } catch (err) {
    yield put(createAccountError(err));
  }
}

export default function* watchAll() {
  yield all([
    yield takeLatest(types.CREATE_ACCOUNT, createAccount),
  ]);
}
