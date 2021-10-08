// start by requiring libraries
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
// declaring the port
const PORT = process.env.PORT || 3000;

// declaring the application
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// set up connection for mongoose and set it to be true
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://qabas-alani:qabas1234@cluster0.4kloe.mongodb.net/workout",
  {
    useNewUrlParser: true,

  }
);

app.use(require("./routes/api.js"));
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
