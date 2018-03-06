/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { SUBMIT_SCHEDULE_VIEWING_SUCCESS } from 'containers/ListingDetailPage/ListingDetailPage.constants';
import { SUBMIT_COUNTER_OFFER_SUCCESS } from 'containers/ActivityPage/ActivityPage.constants';
import { CREATE_ACCOUNT_SUCCESS } from 'containers/CreateAccountPage/CreateAccountPage.constants';
import { LOGIN_SUCCESS } from 'containers/LoginPage/LoginPage.constants';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    language: languageProviderReducer,
    ...injectedReducers,
    form: formReducer.plugin({
      scheduleViewingListing: (state, action) => {
        switch (action.type) {
          case SUBMIT_SCHEDULE_VIEWING_SUCCESS:
            return undefined;
          default:
            return state;
        }
      },
      counterOfferForm: (state, action) => {
        switch (action.type) {
          case SUBMIT_COUNTER_OFFER_SUCCESS:
            return undefined;
          default:
            return state;
        }
      },
      createAccountForm: (state, action) => {
        switch (action.type) {
          case CREATE_ACCOUNT_SUCCESS:
            return undefined;
          default:
            return state;
        }
      },
      loginForm: (state, action) => {
        switch (action.type) {
          case LOGIN_SUCCESS:
            return undefined;
          default:
            return state;
        }
      },
    }),
  });
}
