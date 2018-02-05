import { GET_LISTINGS, GET_LISTINGS_SUCCESS, GET_LISTINGS_ERROR } from './SearchPage.constants';

export function getListings() {
  return {
    type: GET_LISTINGS,
  };
}

export function listingsLoaded(listings) {
  return {
    type: GET_LISTINGS_SUCCESS,
    listings,
  };
}

export function listingsError(err) {
  return {
    type: GET_LISTINGS_ERROR,
    err,
  };
}
