import { combineReducers } from 'redux';

// Import Actions
import * as appActions from './AppActions';

const showSpinner = (
  state = true,
  action
) => {
  switch (action.type) {
    case appActions.TOGGLE_SPINNER_ON:
      return true;
    case appActions.TOGGLE_SPINNER_OFF:
      return false;
    default:
      return state;
  }
};

const showAddWarning = (
  state = false,
  action
) => {
  switch (action.type) {
    case appActions.TOGGLE_ADD_WARNING:
      return !state;
    default:
      return state;
  }
};

// const appWarning = (
//   state = '',
//   action
// ) => {
//   switch (action.type) {
//     case appActions.ADD_APP_WARNING:
//       return action.message;
//     case appActions.REMOVE_APP_WARNING:
//       return '';
//     default:
//       return state;
//   }
// };

const systemMessages = (
  state = [],
  action
) => {
  switch (action.type) {
    case appActions.ADD_SYSTEM_MESSAGE:
      return [...state, action.newAlert];
    case appActions.REMOVE_SYSTEM_MESSAGE:
      return [];
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  showSpinner,
  showAddWarning,
  systemMessages
});

/* Selectors */

// Get showAddPost
export const getShowSpinner = state => state.app.showSpinner;

export const getShowAddWarning = state => state.app.showAddWarning;

// export const systemMessages = state => state.app.systemMessages;

// Export Reducer
export default AppReducer;
