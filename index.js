var app = require("./server/server");
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port: " + port);
});