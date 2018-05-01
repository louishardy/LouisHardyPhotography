var express = require(“express”);
app.set(“port”, 4000);

var path = require(“C:\Users\Louis\Documents\LouisHardyPhotography\Public”);

app.use(express.static(“C:\Users\Louis\Documents\LouisHardyPhotography\Public”.join(__dirname, “/”)));

app.get("/", function (request, response) {
  response.sendFile(“C:\Users\Louis\Documents\LouisHardyPhotography\Public”.join(__dirname + "/public/html/index.html"))
});


app.listen(app.get(“port”, 4000),  function () {
  console.log(“http:localhost:4000
  app.get(“port”) + “; press Ctrl-C to terminate.” );
});
