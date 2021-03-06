import callApi from '../../util/apiCaller';
import * as appActions from '../App/AppActions';
import { browserHistory } from 'react-router';

// Export Constants
export const ADD_LIST = 'ADD_LIST';
export const ADD_RANDOM_LIST = 'ADD_RANDOM_LIST';
export const LIST_NOT_FOUND = 'LIST_NOT_FOUND';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const ADD_LIST_ITEM_ERROR = 'ADD_LIST_ITEM_ERROR';
export const TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const ADD_LISTS = 'ADD_LISTS';
export const ADD_RECENT_LISTS = 'ADD_RECENT_LISTS';
export const ADD_PAGINATED_LISTS = 'ADD_PAGINATED_LISTS';
export const RESET_PAGINATED_LISTS = 'RESET_PAGINATED_LISTS';
export const ADD_DEMO_LISTS = 'ADD_DEMO_LISTS';
export const ADD_TEMPLATES = 'ADD_TEMPLATES';
export const DELETE_POST = 'DELETE_POST';
export const SET_COUNT = 'SET_COUNT';

// Export Actions
export function addPost(list) {
  return {
    type: ADD_LIST,
    list,
  };
}

export function addRandomList(list) {
  return {
    type: ADD_RANDOM_LIST,
    list,
  };
}

export function addListRequest(list, endpoint='lists/find_or_create') {
  return (dispatch) => {
    return callApi(endpoint, 'post', {
      list: {
        verb: list.verb,
        action: list.action,
      },
    }).then( (res) =>  {
      if(res.list){
        dispatch(addPost(res.list));
        dispatch(appActions.changeTab(''));
        browserHistory.push(`/lists/${res.list.cuid}`);
      }
      else {
        dispatch(appActions.toggleAddWarning());
      }
    });
  };
}

export function cloneListRequest(props) {
  return (dispatch) => {
    return callApi(`lists/${props.cuid}/clone`, 'post')
      .then(res => {
        dispatch(addPost(res.list));
        browserHistory.push(`/lists/${res.list.cuid}`);
        dispatch(appActions.changeTab(''));
        dispatch(appActions.toggleSpinnerOff());
      });
  };
}

export function addListItem(list) {
  return {
    type: ADD_LIST_ITEM,
    list,
  };
}

export function addListItemRequest(props) {
  return (dispatch) => {
    return callApi(`lists/${props.cuid}`, 'post', {
      item: props.text,
    }).then( (res) => {
      if(res.list) {
        const successMessage = `${props.text} successfully added to list 
          ${res.list.name}`;
        dispatch(addListItem(res.list));
        dispatch(appActions.addSystemMessage(successMessage, 'success'));
      }
      else {
        dispatch(appActions.addSystemMessage(res, 'danger'));
      }
    });
  };
}

export function toggleListItem(list) {
  return {
    type: TOGGLE_LIST_ITEM,
    list
  };
}

export function toggleListItemRequest(props) {
  return (dispatch) => {
    return callApi(`lists/${props.cuid}/toggle/${props.list_item_id}`, 'put')
      .then(res => dispatch(toggleListItem(res.list)));
  };
}

export function deleteListItem(list) {
  return {
    type: DELETE_LIST_ITEM,
    list
  };
}

export function deleteListItemRequest(props) {
  return (dispatch) => {
    return callApi(`lists/${props.cuid}/item/${props.list_item_id}`, 'delete')
      .then(res => dispatch(deleteListItem(res.list)));
  };
}

export function addLists(lists) {
  return {
    type: ADD_LISTS,
    lists,
  };
}

export function addDemoLists(lists) {
  return {
    type: ADD_DEMO_LISTS,
    lists,
  };
}

export function addRecentLists(lists) {
  return {
    type: ADD_RECENT_LISTS,
    lists,
  };
}

export function addPaginatedLists(lists) {
  return {
    type: ADD_PAGINATED_LISTS,
    lists,
  };
}

export function resetPaginatedLists(lists) {
  return {
    type: RESET_PAGINATED_LISTS,
    lists,
  };
}

export function setCount(count) {
  return {
    type: SET_COUNT,
    count,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('lists').then(res => {
      dispatch(addLists(res.lists));
      dispatch(appActions.toggleSpinnerOff());
    });
  };
}

export function fetchDemoLists() {
  return (dispatch) => {
    return callApi('lists/demo').then(res => {
      dispatch(addDemoLists(res.lists));
    });
  };
}

export function fetchRecentLists() {
  return (dispatch) => {
    return callApi('lists/recent').then(res => {
      dispatch(addRecentLists(res.lists));
    });
  };
}

export function fetchRandomList() {
  return (dispatch) => {
    return callApi('lists/random').then(res => {
      dispatch(addRandomList(res.list));
    });
  };
}

export function fetchPaginatedLists(page) {
  const pageToLoad = page || 1;
  return (dispatch) => {
    return callApi(`lists/recent/${pageToLoad}`).then(res => {
      if(page) {
        dispatch(addPaginatedLists(res.lists));
      }
      else {
        dispatch(resetPaginatedLists(res.lists));
      }
      dispatch(appActions.toggleSpinnerOff());
      dispatch(appActions.toggleLoading(false));
    });
  };
}


export function fetchList(cuid) {
  return (dispatch) => {
    return callApi(`lists/${cuid}`).then(res => {
      if(res.list){
        dispatch(addPost(res.list));
      }
    });
  };
}

export function fetchCount() {
  return (dispatch) => {
    return callApi('lists/count').then(res => {
      if(res.count){
        dispatch(setCount(res.count));
      }
    });
  };
}
