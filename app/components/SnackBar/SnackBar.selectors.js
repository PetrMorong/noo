import { createSelector } from 'reselect';

const selectSnackBar = (state) => state.get('snackbar');

const makeSelectData = () => createSelector(
  selectSnackBar,
  (state) => state.get('data')
);

export {
  makeSelectData,
  selectSnackBar,
};
