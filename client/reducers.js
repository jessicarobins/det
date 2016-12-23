/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Import Reducers
import app from './modules/App/AppReducer';
import lists from './modules/Post/ListReducer';
import templates from './modules/Template/TemplateReducer';
import user from './modules/User/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  lists,
  templates,
  user,
  routing
});
