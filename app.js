let exp = require("express");
let app = exp();
let port = 3000;
app.use(exp.static("./public"));
app.use("/api", require("./routes/test"));
app.listen(port);
