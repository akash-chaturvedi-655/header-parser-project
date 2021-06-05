// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami",function (req,res)
{
let client_ip=req.connection.remoteAddress;
console.log("Client Ip address is : "+client_ip);
//console.log(req.get(headerName));
//console.log(JSON.stringify(req.headers));
let client_header=req.headers;
console.log(client_header["user-agent"]);
console.log(client_header["accept-language"]);

res.json({

  "ipaddress" : client_ip,
  "language" : client_header["accept-language"],
  "software" : client_header["user-agent"]
  //"header" : client_header
});

})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
