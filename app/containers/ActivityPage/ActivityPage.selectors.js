import { createSelector } from 'reselect';

const selectActivity = (state) => state.get('activity');
const selectForm = (state) => state.getIn(['form']);

const makeSelectMode = () => createSelector(
  selectActivity,
  (state) => state.get('mode')
);
const makeSelectListings = () => createSelector(
  selectActivity,
  (state) => state.get('listings')
);
const makeSelectLoadingListings = () => createSelector(
  selectActivity,
  (state) => state.get('loadingListings')
);
const makeSelectListingsOffers = () => createSelector(
  selectActivity,
  (state) => state.get('listingsOffers')
);
const makeSelectLoadingListingsOffers = () => createSelector(
  selectActivity,
  (state) => state.get('loadingListingsOffers')
);
const makeSelectOpenCounterOfferModal = () => createSelector(
  selectActivity,
  (state) => state.get('openCounterOfferModal')
);
const makeListingsStep = () => createSelector(
  selectActivity,
  (state) => state.get('listingsStep')
);
const makeSelectSelectedListing = () => createSelector(
  selectActivity,
  (state) => state.get('selectedListing')
);
const makeSelectSelectedOffer = () => createSelector(
  selectActivity,
  (state) => state.get('selectedOffer')
);
const makeSelectCounterOfferForm = () => createSelector(
  selectForm,
  (state) => state.counterOfferForm
);
export {
  selectActivity,
  makeSelectMode,
  makeSelectListings,
  makeSelectLoadingListings,
  makeSelectLoadingListingsOffers,
  makeSelectListingsOffers,
  makeSelectOpenCounterOfferModal,
  makeListingsStep,
  makeSelectSelectedListing,
  makeSelectSelectedOffer,
  makeSelectCounterOfferForm,
};
