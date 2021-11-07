import {
    UPDATE_LOCATION_SUCCESS,
    UPDATE_LOCATION_FAIL
  } from "../actions/types";

  const initialState = { 
    lat: 43.768160, lon: -79.380150 
  }
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case UPDATE_LOCATION_SUCCESS:
        return {
          ...state,
          lat: payload.data.fields.lat,
          lon: payload.data.fields.lon
        };
      case UPDATE_LOCATION_FAIL: //todo
        return state
      default:
        return state;
    }
  }