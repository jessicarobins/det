import { combineReducers } from 'redux';

import * as actions from './ListActions';

const lists = (
  state = [],
  action
) => {
  switch (action.type) {
    case actions.ADD_LIST :
      return [action.list, ...state];
    case actions.ADD_LIST_ITEM :
      return [action.list];
    case actions.TOGGLE_LIST_ITEM :
      return [action.list];
    case actions.DELETE_LIST_ITEM :
      return [action.list];
    case actions.ADD_LISTS :
      return action.lists;
    default:
      return state;
  }
};

const ListReducer = combineReducers({
  lists
});

/* Selectors */

// Get all posts
export const getPosts = state => state.lists.lists;

// Get post by cuid
export const getPost = (state, cuid) => state.lists.lists.filter(list => list.cuid === cuid)[0];

// Export Reducer
export default ListReducer;
