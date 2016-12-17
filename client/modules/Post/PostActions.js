import callApi from '../../util/apiCaller';
import * as appActions from '../App/AppActions';
import { browserHistory } from 'react-router';

// Export Constants
export const ADD_LIST = 'ADD_LIST';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const ADD_LIST_ITEM_ERROR = 'ADD_LIST_ITEM_ERROR';
export const TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const ADD_LISTS = 'ADD_LISTS';
export const ADD_TEMPLATES = 'ADD_TEMPLATES';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(list) {
  return {
    type: ADD_LIST,
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
        browserHistory.push(`/lists/${res.list.cuid}`);
      }
      else {
        dispatch(appActions.toggleAddWarning());
      }
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
        dispatch(addListItem(res.list));
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

export function addTemplates(templates) {
  return {
    type: ADD_TEMPLATES,
    templates,
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
      dispatch(addLists(res.lists));
    });
  };
}

export function fetchList(cuid) {
  return (dispatch) => {
    return callApi(`lists/${cuid}`).then(res => {
      dispatch(addPost(res.list));
    });
  };
}

export function fetchTemplates() {
  return (dispatch) => {
    return callApi('templates').then(res => {
      dispatch(addTemplates(res.templates));
    });
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
