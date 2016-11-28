// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ADD_WARNING } from './AppActions';

// Initial State
const initialState = {
  showAddPost: true,
  showAddWarning: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_ADD_WARNING:
      return {
        showAddWarning: !state.showAddWarning,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

export const getShowAddWarning = state => state.app.showAddWarning;

// Export Reducer
export default AppReducer;
