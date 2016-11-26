import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_LIST = 'ADD_LIST';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const ADD_LISTS = 'ADD_LISTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(list) {
  return {
    type: ADD_LIST,
    list,
  };
}

export function addListRequest(list) {
  return (dispatch) => {
    return callApi('lists/find_or_create', 'post', {
      list: {
        verb: list.verb,
        action: list.action,
      },
    }).then(res => dispatch(addPost(res.list)));
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
      items: [ props.text ],
    }).then(res => dispatch(addListItem(res.list)));
  };
}

export function addLists(lists) {
  return {
    type: ADD_LISTS,
    lists,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('lists').then(res => {
      dispatch(addLists(res.lists));
    });
  };
}

export function fetchList(cuid) {
  return (dispatch) => {
    return callApi(`lists/${cuid}`).then(res => dispatch(addPost(res.list)));
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
