import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_LIST = 'ADD_LIST';
export const ADD_LISTS = 'ADD_LISTS';
export const DELETE_LIST = 'DELETE_LIST';

// Export Actions
export function addList(list) {
  return {
    type: ADD_LIST,
    list,
  };
}

export function addListRequest(list) {
  return (dispatch) => {
    return callApi('lists', 'list', {
      list: {
        name: list.name,
      },
    }).then(res => dispatch(addList(res.list)));
  };
}

export function addLists(lists) {
  return {
    type: ADD_LISTS,
    lists,
  };
}

export function fetchLists() {
  return (dispatch) => {
    return callApi('lists').then(res => {
      dispatch(addLists(res.lists));
    });
  };
}

export function fetchList(cuid) {
  return (dispatch) => {
    return callApi(`lists/${cuid}`).then(res => dispatch(addList(res.list)));
  };
}

export function deleteList(cuid) {
  return {
    type: DELETE_LIST,
    cuid,
  };
}

export function deleteListRequest(cuid) {
  return (dispatch) => {
    return callApi(`lists/${cuid}`, 'delete').then(() => dispatch(deleteList(cuid)));
  };
}
