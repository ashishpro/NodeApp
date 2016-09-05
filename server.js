var http = require('http');

var server = http.createServer(function(res,req){
  console.log("Running at 2020...")
  res.end("Request Recieved. |");
}).listen(2020);
