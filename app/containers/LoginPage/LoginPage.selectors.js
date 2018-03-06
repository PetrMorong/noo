import { createSelector } from 'reselect';

const selectLoginPage = (state) => state.get('loginPage');

export const makeSelectError = () => createSelector(
  selectLoginPage,
  (state) => state.get('error')
);
export const makeSelectSubmitting = () => createSelector(
  selectLoginPage,
  (state) => state.get('submitting')
);
