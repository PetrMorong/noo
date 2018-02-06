import { GET_LISTING_DETAIL, GET_LISTING_DETAIL_SUCCESS, GET_LISTING_DETAIL_ERROR } from './ListingDetailPage.constants';

export function getListingDetail(id) {
  return {
    type: GET_LISTING_DETAIL,
    id,
  };
}

export function detailLoaded(data) {
  return {
    type: GET_LISTING_DETAIL_SUCCESS,
    data,
  };
}

export function detailError(err) {
  return {
    type: GET_LISTING_DETAIL_ERROR,
    err,
  };
}
