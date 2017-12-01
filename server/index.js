const express = require("express");
const path = require("path");

const app = express();
const router = require("./routes/index");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../", "client")));
app.use(router);

app.listen(PORT, err => {
  if (err) throw err;
  console.log("connected to port", PORT);
});
