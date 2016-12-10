import { combineReducers } from 'redux';

// Import Actions
import * as appActions from './AppActions';

const showSpinner = (
  state = false,
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

const AppReducer = combineReducers({
  showSpinner,
  showAddWarning,
});

/* Selectors */

// Get showAddPost
export const getShowSpinner = state => state.app.showSpinner;

export const getShowAddWarning = state => state.app.showAddWarning;

// Export Reducer
export default AppReducer;
