import {
    UPDATE_LOCATION_SUCCESS,
    UPDATE_LOCATION_FAIL,
    SET_MESSAGE
  } from "./types";
  
  import AuthService from "../services/auth.service";
  import LocationService from '../services/location.service'
  
  export const updateLocation = () => (dispatch) => {
    return LocationService.getLocation().then(
      (data) => {
        console.log(data)
  
        dispatch({
          type: UPDATE_LOCATION_SUCCESS,
          payload: {data: data},
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
          type: UPDATE_LOCATION_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: {type: 'error', text:message},
        });
  
        // return Promise.reject();
      }
    );
  };