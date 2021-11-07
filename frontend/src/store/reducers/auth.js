import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/types";
  
  const authtoken = window.localStorage.getItem("authtoken");

  const initialState = 
  authtoken && authtoken!=''? { 
    isLoggedIn: true, authtoken 
  } : { 
    isLoggedIn: false, authtoken: null 
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          authtoken: payload.authtoken,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          authtoken: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          authtoken: null,
        };
      default:
        return state;
    }
  }