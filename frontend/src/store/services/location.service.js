import axios from "axios";
import authHeader from "../authHeader";

const API_URL = "http://localhost:8000/pet/location/";

const getLocation = () => {
  var config = {
    method: 'get',
    url: API_URL,
    headers: authHeader()
  };
  return axios(config)
  .then(response => {
    console.warn(response.data)
    return response.data
  })
  .catch(err =>  {
    throw err
  })
};

export default {
    getLocation
};