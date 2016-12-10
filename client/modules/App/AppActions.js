import callApi from '../../util/apiCaller';

// Export Constants
export const TOGGLE_SPINNER_ON = 'TOGGLE_SPINNER_ON';
export const TOGGLE_SPINNER_OFF = 'TOGGLE_SPINNER_OFF';
export const TOGGLE_ADD_WARNING = 'TOGGLE_ADD_WARNING';

// Export Actions

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