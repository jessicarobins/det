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

const paginatedLists = (
  state = [],
  action
) => {
  switch (action.type) {
    case actions.ADD_PAGINATED_LISTS :
      return [...state, ...action.lists];
    case actions.RESET_PAGINATED_LISTS:
      return [...action.lists];
    default:
      return state;
  }
};

const count = (
  state = 0,
  action
) => {
  switch (action.type) {
    case actions.SET_COUNT :
      return action.count;
    default:
      return state;
  }
};

const randomList = (
  state = '',
  action
) => {
  switch (action.type) {
    case actions.ADD_RANDOM_LIST :
      return action.list;
    default:
      return state;
  }
};



const ListReducer = combineReducers({
  count,
  lists,
  demoLists,
  recentLists,
  paginatedLists,
  randomList
});

/* Selectors */

// Get all posts
export const getPosts = state => state.lists.lists;

// Get post by cuid
export const getPost = (state, cuid) => {
  const lists = [...state.lists.lists, ...state.lists.recentLists, ...state.lists.paginatedLists, state.lists.randomList];
  return lists.filter(list => list.cuid === cuid)[0];
}

export const getDemoLists = state => state.lists.demoLists;
export const getRecentLists = state => state.lists.recentLists;
export const getPaginatedLists = state => state.lists.paginatedLists;
export const getCount = state => state.lists.count;
export const getRandomList = state => state.lists.randomList;

// Export Reducer
export default ListReducer;
