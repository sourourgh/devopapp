var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. THis is TECHESSAYsouurr, Please share and Subscribe and like my Videos gfnnnnnnnnnnnnnnnammmiinn'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
