import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_LIST = 'ADD_LIST';
export const ADD_LISTS = 'ADD_LISTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(list) {
  return {
    type: ADD_LIST,
    list,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('lists', 'post', {
      list: {
        name: post.name,
      },
    }).then(res => dispatch(addPost(res.list)));
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

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
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
