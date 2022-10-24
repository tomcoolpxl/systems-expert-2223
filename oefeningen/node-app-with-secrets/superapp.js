// SuperApp voor taallectoren
// deze app gebruik 3 environment variables
var http = require('http');
var server = http.createServer(function (request, response) {
  const language = process.env.LANGUAGE;
  const API_KEY = process.env.API_KEY;
  response.write(`Language: ${language}\n`);
  response.write(`API Key: ${API_KEY}\n`);
  response.end(`\n`);
});
listen_port = parseInt(process.env.ID, 9000);
server.listen(listen_port);