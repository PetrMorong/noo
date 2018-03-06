import { createSelector } from 'reselect';

const selectCreateAccountPage = (state) => state.get('createAccountPage');

export const makeSelectError = () => createSelector(
  selectCreateAccountPage,
  (state) => state.get('error')
);
export const makeSelectSubmitting = () => createSelector(
  selectCreateAccountPage,
  (state) => state.get('submitting')
);
