import * as types from './SnackBar.constants';

export function closeSnackbar() {
  return {
    type: types.CLEAR_SNACKBAR,
  };
}

export function addEventSnackbar(event) {
  return {
    type: types.ADD_EVENT_SNACKBAR,
    event,
  };
}
