import { createSelector } from 'reselect';
import { selectGlobal } from 'containers/App/selectors';

const selectListingDetail = (state) => state.get('lisitingDetailPage');
const selectForm = (state) => state.getIn(['form']);

const makeSelectData = () => createSelector(
  selectListingDetail,
  (state) => state.get('data')
);

const makeSelectLoading = () => createSelector(
  selectListingDetail,
  (state) => state.get('loading')
);

const makeSelectExpandMobile = () => createSelector(
  selectListingDetail,
  (state) => state.get('expandMobile')
);

const makeSelectopenSuccessViewingDialog = () => createSelector(
  selectListingDetail,
  (state) => state.get('openSuccessViewingDialog')
);

const makeSelectOpenOfferModal = () => createSelector(
  selectListingDetail,
  (state) => state.get('openOfferModal')
);

const makeSelectScheduleViewingData = () => createSelector(
  selectListingDetail,
  selectForm,
  selectGlobal,
  (listingDetail, form, global) => ({
    userId: global.getIn(['user', 'id']),
    listingId: listingDetail.get('data').id,
    date: form.scheduleViewingListing.values.date,
    time: form.scheduleViewingListing.values.time,
    status: 'submited', // TODO make dynamic, dont declare here
  })
);

export {
  makeSelectData,
  selectListingDetail,
  makeSelectLoading,
  selectForm,
  makeSelectScheduleViewingData,
  makeSelectExpandMobile,
  makeSelectopenSuccessViewingDialog,
  makeSelectOpenOfferModal,
};
