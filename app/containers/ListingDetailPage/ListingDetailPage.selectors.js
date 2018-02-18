import { createSelector } from 'reselect';
import { selectGlobal } from 'containers/App/selectors';
import _ from 'lodash';

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
const makeSelectmakeOfferForm = () => createSelector(
  selectForm,
  (state) => state.makeOfferForm
);
const makeSelectmakeViewingForm = () => createSelector(
  selectForm,
  (state) => state.scheduleViewingListing
);
const makeSelectRoomatesFound = () => createSelector(
  selectListingDetail,
  (state) => state.get('roomatesFound')
);
const makeSelectGarantorsFound = () => createSelector(
  selectListingDetail,
  (state) => state.get('garantorsFound')
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
    status: 'submited', // TODO make dynamic, dont declare here, create all the statuses
  })
);

// add listingID
const makeSelectSentOfferData = () => createSelector(
  selectListingDetail,
  selectForm,
  selectGlobal,
  (listingDetail, form, global) => ({
    userId: global.getIn(['user', 'id']),
    price: form.makeOfferForm.values.price,
    moveInDate: form.makeOfferForm.values.moveInDate,
    leaseDuration: form.makeOfferForm.values.leaseDuration,
    deposit: form.makeOfferForm.values.deposit,
    roomates: _.compact(Object.keys(listingDetail.get('roomatesFound')).map((i) => listingDetail.get('roomatesFound')[i].id)),
    garantors: _.compact(Object.keys(listingDetail.get('garantorsFound')).map((i) => listingDetail.get('garantorsFound')[i].id)),
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
  makeSelectmakeOfferForm,
  makeSelectRoomatesFound,
  makeSelectGarantorsFound,
  makeSelectSentOfferData,
  makeSelectmakeViewingForm,
};
