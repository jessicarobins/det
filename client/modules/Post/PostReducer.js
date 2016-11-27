import { ADD_LIST, ADD_LIST_ITEM, ADD_LISTS, TOGGLE_LIST_ITEM, DELETE_POST } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST :
      return {
        data: [action.list, ...state.data],
      };
      
    case ADD_LIST_ITEM :
      return {
        data: [action.list],
      };
    
    case TOGGLE_LIST_ITEM :
      return {
        data: [action.list],
      };
      
    case ADD_LISTS :
      return {
        data: action.lists,
      };
    
    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
