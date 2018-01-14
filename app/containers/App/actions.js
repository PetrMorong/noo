/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  SIDE_MENU_TOGGLE,
  USER_LOGIN,
  USER_SIGN_OUT,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Dispatched when clicking on burger in the header
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SIDE_MENU_TOGGLE
 */
export function toggleSideMenu() {
  return {
    type: SIDE_MENU_TOGGLE,
  };
}

/**
 * Dispatched when clicking on user logs in
 *
 * @param  {object} TODO
 *
 * @return {object}  An action object with a type of USER_LOGIN
 */
export function login() {
  return {
    type: USER_LOGIN,
  };
}

/**
 * Dispatched when clicking on user sign out
 *
 * @return {object}  An action object with a type of USER_SIGN_OUT
 */
export function signOut() {
  return {
    type: USER_SIGN_OUT,
  };
}
