import callApi from '../../util/apiCaller';

// Export Constants
export const TOGGLE_SPINNER_ON = 'TOGGLE_SPINNER_ON';
export const TOGGLE_SPINNER_OFF = 'TOGGLE_SPINNER_OFF';
export const TOGGLE_ADD_WARNING = 'TOGGLE_ADD_WARNING';
export const ADD_APP_WARNING = 'ADD_APP_WARNING';
export const REMOVE_APP_WARNING = 'REMOVE_APP_WARNING';

// Export Actions
export function addAppWarning(message) {
  return {
    type: ADD_APP_WARNING,
    message
  };
}

export function removeAppWarning() {
  return {
    type: REMOVE_APP_WARNING
  };
}

export function toggleAddWarning() {
  return {
    type: TOGGLE_ADD_WARNING,
  };
}

export function toggleSpinnerOn() {
  return {
    type: TOGGLE_SPINNER_ON
  };
}

export function toggleSpinnerOff() {
  return {
    type: TOGGLE_SPINNER_OFF
  };
}