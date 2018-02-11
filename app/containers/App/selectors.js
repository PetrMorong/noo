import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('user')
);
const makeSelectOpenConfirmDialog = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('openConfirmDialog')
);
const makeSelectDataConfirmDialog = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('dataConfirmDialog')
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectUser,
  makeSelectOpenConfirmDialog,
  makeSelectDataConfirmDialog,
};
