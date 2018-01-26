import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookies';
import { API_URL, errorHandler } from './index';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types';

//= ===============================
// Authentication actions
//= ===============================

// TO-DO: Add expiration to cookie
export function loginUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${API_URL}auth/login`, { email, password })
    .then((response) => {
      cookie.save('token', response.data.token, { path: '/' });
      cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: AUTH_USER });
      browserHistory.goBack();
    })
    .catch((error) => {
      document.getElementById("ide").classList.add("errDiv")
      document.getElementById("ide").classList.remove("errDiv")
      document.getElementById("ide").innerHTML = ("The email or password you have entered is incorrect.");
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}

export function registerUser({ email, password }) {
  function validateEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  }

  if (!validateEmail(email)){
    document.getElementById("ide").classList.add("errDiv")
    document.getElementById("ide").classList.remove("errDiv")
    document.getElementById("ide").innerHTML = ("Please enter a vaild email address.");
    return;
  }
  else if (password.length < 4){
    document.getElementById("ide").classList.add("errDiv")
    document.getElementById("ide").classList.remove("errDiv")
    document.getElementById("ide").innerHTML = ("Your password must be longer than 3 characters.");
    return;
  }
  else{
    return function (dispatch) {
        axios.post(`${API_URL}auth/register`, { email, password })
        .then((response) => {
          cookie.save('token', response.data.token, { path: '/' });
          cookie.save('user', response.data.user, { path: '/' });
          dispatch({ type: AUTH_USER });
          browserHistory.goBack();
        })
        .catch((error) => {
          document.getElementById("ide").classList.add("errDiv")
          document.getElementById("ide").classList.remove("errDiv")
          document.getElementById("ide").innerHTML = ("Email has already been used.");
          errorHandler(dispatch, error.response, AUTH_ERROR);
        });
      };
  }
}

export function logoutUser(error) {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER, payload: error || '' });
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });

    browserHistory.goBack();
  };
}
