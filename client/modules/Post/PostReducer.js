import * as actions from './PostActions';

// Initial State
const initialState = {
  data: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actions.ADD_LIST :
      return {
        data: [action.list, ...state.data],
      };
      
    case actions.ADD_LIST_ITEM :
      return {
        data: [action.list],
      };
    
    case actions.TOGGLE_LIST_ITEM :
      return {
        data: [action.list],
      };
    
    case actions.DELETE_LIST_ITEM :
      return {
        data: [action.list],
      };
      
    case actions.ADD_LISTS :
      return {
        data: action.lists,
      };
    
    case actions.DELETE_POST :
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
