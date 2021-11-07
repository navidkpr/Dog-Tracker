import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  
  import AuthService from "../services/auth.service";
import { updateLocation } from "./location";
  
  export const register = (email, password) => (dispatch) => {
    return AuthService.register(email, email, password).then(
      (data) => {
        console.log(data)
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: {type: 'success', text:'User created successfully'},
        });
  
        // return Promise.resolve();
      },
      (error) => {
        console.log("error is: ", error)
        var message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        if (error.response && error.response.data) {
          if (error.response.data.username)
              message = error.response.data.username
              if (error.response.data.email)
              message = error.response.data.email
          if (error.response.data.password)
            message = error.response.data.password
        }
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: {type: 'error', text:message},
        });
  
        // return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        // return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: {type: 'success', text:'Incorrect username or password'}
        });
  
        // return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };