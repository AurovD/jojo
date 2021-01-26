let exp = require("express");
let app = exp();
let port = 3000;
app.get("/", (req, res) => {
  res.send("You see something strange");
});
app.listen(port);
