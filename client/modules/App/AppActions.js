import callApi from '../../util/apiCaller';

// Export Constants
export const TOGGLE_SPINNER_ON = 'TOGGLE_SPINNER_ON';
export const TOGGLE_SPINNER_OFF = 'TOGGLE_SPINNER_OFF';
export const TOGGLE_ADD_WARNING = 'TOGGLE_ADD_WARNING';
export const ADD_SYSTEM_MESSAGE = 'ADD_SYSTEM_MESSAGE';
export const REMOVE_SYSTEM_MESSAGE = 'REMOVE_SYSTEM_MESSAGE';

// Export Actions
export function addSystemMessage(message, type) {
  const newAlert = {
		id: (new Date()).getTime(),
		type: type,
		message: message
	};
  return {
    type: ADD_SYSTEM_MESSAGE,
    newAlert
  };
}

export function removeSystemMessage() {
  return {
    type: REMOVE_SYSTEM_MESSAGE
  };
}

// export function addAppWarning(message) {
//   return {
//     type: ADD_APP_WARNING,
//     message
//   };
// }

// export function removeAppWarning() {
//   return {
//     type: REMOVE_APP_WARNING
//   };
// }

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