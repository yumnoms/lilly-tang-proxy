const express = require("express");
const app = express();
const port = 3000;

// ROUTES ========================================================================================

// get the top dishes of a restaurant
app.get("/", function(req, res) {
  res.send("hello world from proxy");
});

// get the top dishes of a restaurant
app.use("/:id", express.static("client"));

app.listen(port, () => console.log(`Homiezz, listening on port ${port}`));
