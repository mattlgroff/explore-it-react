import axios from 'axios';
import cookie from 'react-cookies';
//import { logoutUser } from './auth';
import { FETCH_USER } from './types';
export const API_URL = 'https://exploreit.herokuapp.com/';
export const CLIENT_ROOT_URL = 'https://exploreit.herokuapp.com/';

//= ===============================
// Utility actions
//= ===============================

export function fetchUser(uid) {
  return function (dispatch) {
    axios.get(`${API_URL}/user/${uid}`, {
      headers: { Authorization: cookie.load('token') },
    })
    .then((response) => {
      dispatch({
        type: FETCH_USER,
        payload: response.data.user,
      });
    })
    .catch(response => dispatch(errorHandler(response.data.error)));
  };
}

export function errorHandler(dispatch, error, type) {
  // console.log('Error type: ', error);
  //console.log(error);



  //let errorMessage = error.response ? error.response.data : error;

   // NOT AUTHENTICATED ERROR
  // if (error.status === 401 || error.response.status === 401) {
  //   errorMessage = 'You are not authorized to do this.';
  //   return dispatch(logoutUser(errorMessage));
  // }

  // dispatch({
  //   type,
  //   payload: errorMessage,
  // });
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.post(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Get Request
export function getData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.get(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.put(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Delete Request
export function deleteData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.delete(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}
