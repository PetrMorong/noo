import { createSelector } from 'reselect';

const selectListingDetail = (state) => state.get('lisitingDetailPage');

const makeSelectData = () => createSelector(
  selectListingDetail,
  (state) => state.get('data')
);

const makeSelectLoading = () => createSelector(
  selectListingDetail,
  (state) => state.get('loading')
);

export {
  makeSelectData,
  selectListingDetail,
  makeSelectLoading,
};
