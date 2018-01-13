/**
 * Sidemenu selectors
 */

import { createSelector } from 'reselect';

const selectApp = (state) => state.get('app');

const makeSelectSideMenuOpen = () => createSelector(
  selectApp,
  (appState) => appState.get('sideMenuOpen')
);

export {
  selectApp,
  makeSelectSideMenuOpen,
};
