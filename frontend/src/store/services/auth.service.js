import axios from "axios";

const API_URL = "http://localhost:8000/auth/";

const register = (username, email, password) => {
  return axios.post('http://localhost:8000/auth/users/', {
    username: username,
    email: email,
    password: password })
  .then(response => {
    return response.data
  })
  .catch(err =>  {
    throw err
  })
};

const login = (email, password) => {
  return axios.post('http://localhost:8000/auth/token/login/', {
    username: email,
    password: password })
    .then((response) => {
      console.error(response)
      if (response.data.auth_token) {
        window.localStorage.setItem("authtoken", response.data.auth_token);
      }

      return response.data;
    })  
    .catch(err =>  {
      throw err
    });
};

const logout = () => {
  window.localStorage.removeItem("authtoken");
};

export default {
  register,
  login,
  logout,
};