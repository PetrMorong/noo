/**
 * Sidemenu selectors
 */

import { createSelector } from 'reselect';

const selectApp = (state) => state.get('app');

const makeSelectSideMenuOpen = () => createSelector(
  selectApp,
  (appState) => appState.get('sideMenuOpen')
);

const selectRoute = (state) => state.getIn(['route', 'location']);

const makeSelectPathname = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('pathname')
);

export {
  selectApp,
  makeSelectSideMenuOpen,
  makeSelectPathname,
};
