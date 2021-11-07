export default function authHeader() {
    const authtoken = window.localStorage.getItem('authtoken');
  
    if (authtoken) {
      return { Authorization: 'Token ' + authtoken };
    } else {
      return {};
    }
  }