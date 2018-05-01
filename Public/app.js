
function openBar() {
    document.getElementById("mySidebar").style.width = "100%";
}

function closeBar() {
    document.getElementById("mySidebar").style.width = "0";
}
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
