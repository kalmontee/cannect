import axios from 'axios';

export default {
  // Authenticate if an user exist
  authenticate: (username, password) => axios.get("/api/auth/" + username + password),

  // Create a new user
  createNewAccount: (query) => axios.post("/api/auth", query)
}