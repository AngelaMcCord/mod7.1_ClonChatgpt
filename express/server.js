const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Bonjour Monde!");
});
app.get("/bye", (req, res) => {
  res.send("Au revoir Monde!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
