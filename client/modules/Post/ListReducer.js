import { combineReducers } from 'redux';
import * as _ from 'lodash';

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

const demoLists = (
  state = [],
  action
) => {
  switch (action.type) {
    case actions.ADD_DEMO_LISTS :
      return action.lists;
    default:
      return state;
  }
};

const recentLists = (
  state = [],
  action
) => {
  switch (action.type) {
    case actions.ADD_RECENT_LISTS :
      return action.lists;
    default:
      return state;
  }
};

const ListReducer = combineReducers({
  lists,
  demoLists,
  recentLists
});

/* Selectors */

// Get all posts
export const getPosts = state => state.lists.lists;

// Get post by cuid
export const getPost = (state, cuid) => {
  const lists = _.concat(state.lists.lists, state.lists.recentLists);
  return lists.filter(list => list.cuid === cuid)[0];
}

export const getDemoLists = state => state.lists.demoLists;
export const getRecentLists = state => state.lists.recentLists;

// Export Reducer
export default ListReducer;
