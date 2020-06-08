import axios from 'axios';

export default {
  // Authenticate if an user exist
  authenticate: (data) => axios.post("/api/auth/login", data),

  // Create a new user
  regrister: (query) => axios.post("/api/auth/login", query)
}