let connection;
const directiory = require('./constants');
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  connection.write(directiory[data]);

};






const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {

    handleUserInput(data);
  });
  
  
  return stdin;
};




module.exports = {setupInput};