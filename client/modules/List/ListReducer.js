import { ADD_LIST, ADD_LISTS, DELETE_LIST } from './ListActions';

// Initial State
const initialState = { data: [] };

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_LISTS :
      return {
        data: action.lists,
      };

    case DELETE_LIST :
      return {
        data: state.data.filter(list => list.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all lists
export const getLists = state => state.lists.data;

// Get list by cuid
export const getList = (state, cuid) => state.lists.data.filter(list => list.cuid === cuid)[0];

// Export Reducer
export default ListReducer;
