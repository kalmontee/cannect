import axios from 'axios';

export default {
  // Request to get everything from database -- might not need this.
  getAll: () => axios.get("/api/user"),

  getSelectedId: (id) => axios.get("/api/user/" + id),

  // Deletes the saved book with the given id
  delete: (id) => axios.delete("/api/user/" + id),

  update: (id) => axios.put("/api/user/" + id),

  // Sending a request to save comments & likes,
  save: (query) => axios.post("/api/user", query)
}