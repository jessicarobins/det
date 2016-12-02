import callApi from '../../util/apiCaller';

// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_WARNING = 'TOGGLE_ADD_WARNING';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

// Export Actions

export function toggleAddWarning() {
  return {
    type: TOGGLE_ADD_WARNING,
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_REQUEST,
    user,
  };
}

export function loginUserRequest() {
  return (dispatch) => {
    return callApi('auth/google', 'get').then( (res) =>  {
      dispatch(loginUser(res.user));
      console.log('result of call: ', res);
    });
  };
}