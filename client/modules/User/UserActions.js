import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

import * as appActions from '../App/AppActions';
import callApi from '../../util/apiCaller';

export const TOGGLE_LOGIN_MODE = 'TOGGLE_LOGIN_MODE';
export const MANUAL_LOGIN_USER = 'MANUAL_LOGIN_USER';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
export const LOGIN_ERROR_USER = 'LOGIN_ERROR_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_SUCCESS_USER = 'SIGNUP_SUCCESS_USER';
export const SIGNUP_ERROR_USER = 'SIGNUP_ERROR_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_SUCCESS_USER = 'LOGOUT_SUCCESS_USER';
export const LOGOUT_ERROR_USER = 'LOGOUT_ERROR_USER';
export const SET_USERNAME_SUCCESS = 'SET_USERNAME_SUCCESS';
export const SET_USERNAME_FAILURE = 'SET_USERNAME_FAILURE';

export function beginLogout() {
  return { type: LOGOUT_USER};
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS_USER };
}

export function logoutError() {
  return { type: LOGOUT_ERROR_USER };
}

export function setUsernameSuccess(user) {
  return { 
    type: SET_USERNAME_SUCCESS,
    user
  };
}

export function toggleLoginMode() {
  return { type: TOGGLE_LOGIN_MODE };
}

export function setUsernameRequest(props) {
  return (dispatch) => {
    return callApi(`user`, 'put', {
      username: props.username,
    }).then( (res) => {
      if(res.user) {
        dispatch(setUsernameSuccess(res.user));
        dispatch(push('/'));
      }
      else {
        dispatch(appActions.addSystemMessage(res.errors.username.message || res.message, 'danger'));
      }
    });
  };
}

export function logOut() {
  return dispatch => {
    dispatch(beginLogout());

    return callApi('logout', 'post')
      .then(response => {
        dispatch(logoutSuccess());
        dispatch(push('/login'));
      })
      .catch( err => {
        dispatch(logoutError());
      });
  };
}