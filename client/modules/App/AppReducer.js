// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ADD_LIST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: true,
  showAddList: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_ADD_LIST:
      return {
        showAddList: !state.showAddList,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

export const getShowAddList = state => state.app.showAddList;

// Export Reducer
export default AppReducer;
