import axios from 'axios';

export default {
  // Authenticate if an user exist or sign in.
  authenticate: (data) => axios.post("/api/auth/login", data),

  // Create a new user
  regrister: (query) => axios.post("/api/auth/login", query),

  // This checks if there is a token saved to localstorage.
  // If there is no data saved to localstorage then routes are protected.
  isLogin: () => localStorage.getItem("token") ? true : false
}