import { createSelector } from 'reselect';

import { selectListingDetail } from '../ListingDetailPage/ListingDetailPage.selectors';

const selectNotifications = (state) => state.get('notifications');

const makeSelectNotificationOpen = () => createSelector(
  selectNotifications,
  (state) => state.get('opened')
);

const makeSelectNotificationData = () => createSelector(
  selectListingDetail,
  (listingDetail) => ({
    userId: listingDetail.get('data').userId,
    listingId: listingDetail.get('data').id,
    message: 'User made a veiwing request TODO figure out wordings',
    type: 'TODO',
    viewed: false,
  })
);

const makeSelectData = () => createSelector(
  selectNotifications,
  (state) => state.get('data')
);
const makeSelectLoadingNotifications = () => createSelector(
  selectNotifications,
  (state) => state.get('loading')
);
export {
  makeSelectNotificationData,
  selectNotifications,
  makeSelectNotificationOpen,
  makeSelectData,
  makeSelectLoadingNotifications,
};
