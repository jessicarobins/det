import { combineReducers } from 'redux';
import * as UserActions from './UserActions';

const isLogin = (
  state = true,
  action
) => {
  switch (action.type) {
    case UserActions.TOGGLE_LOGIN_MODE:
      return !state;
    default:
      return state;
  }
};

const message = (
  state = '',
  action
) => {
  switch (action.type) {
    case UserActions.TOGGLE_LOGIN_MODE:
    case UserActions.MANUAL_LOGIN_USER:
    case UserActions.SIGNUP_USER:
    case UserActions.LOGOUT_USER:
    case UserActions.LOGIN_SUCCESS_USER:
    case UserActions.SIGNUP_SUCCESS_USER:
      return '';
    case UserActions.LOGIN_ERROR_USER:
    case UserActions.SIGNUP_ERROR_USER:
      return action.message;
    default:
      return state;
  }
};

const isWaiting = (
  state = false,
  action
) => {
  switch (action.type) {
    case UserActions.MANUAL_LOGIN_USER:
    case UserActions.SIGNUP_USER:
    case UserActions.LOGOUT_USER:
      return true;
    case UserActions.LOGIN_SUCCESS_USER:
    case UserActions.SIGNUP_SUCCESS_USER:
    case UserActions.LOGOUT_SUCCESS_USER:
    case UserActions.LOGIN_ERROR_USER:
    case UserActions.SIGNUP_ERROR_USER:
    case UserActions.LOGOUT_ERROR_USER:
      return false;
    default:
      return state;
  }
};

const authenticated = (
  state = false,
  action
) => {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS_USER:
    case UserActions.SIGNUP_SUCCESS_USER:
    case UserActions.LOGOUT_ERROR_USER:
      return true;
    case UserActions.LOGIN_ERROR_USER:
    case UserActions.SIGNUP_ERROR_USER:
    case UserActions.LOGOUT_SUCCESS_USER:
      return false;
    default:
      return state;
  }
};

const userReducer = combineReducers({
  isLogin,
  isWaiting,
  authenticated,
  message
});

export default userReducer;
