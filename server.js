const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Serve up statis assets (usually for Heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

// Add Routes for both API and view
app.use(routes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/socialMediaClone")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, () => console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`));
