let exp = require("express");
let app = exp();
let port = 4000;
app.use(exp.static("./public"));
app.use("/api", require("./routes/test"));
app.listen(port);
