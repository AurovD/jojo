let exp = require("express");
let app = exp();
let port = 3000;
app.use(exp.static("./public"));
app.listen(port);
