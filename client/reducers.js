/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import templates from './modules/Template/TemplateReducer';
import intl from './modules/Intl/IntlReducer';
import user from './modules/User/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  templates,
  intl,
  user,
  routing
});
