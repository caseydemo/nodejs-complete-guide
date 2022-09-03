const http = require("http");
const routes = require('./routes'); // note - since this is local and not a global resourse add ./
const server = http.createServer(routes);
server.listen(3000);
