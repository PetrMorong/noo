import { createSelector } from 'reselect';

const selectSearchPage = (state) => state.get('searchPage');

const makeSelectData = () => createSelector(
  selectSearchPage,
  (searchPageState) => searchPageState.get('data')
);

export {
  selectSearchPage,
  makeSelectData,
};
