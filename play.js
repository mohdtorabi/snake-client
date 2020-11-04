

/**
 * Establishes connection with the game server
 */


const {connect} = require('./client');

console.log('Connecting ...');

connect();

const handleUserInpu = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {

    handleUserInpu(data);
  });
  return stdin;
};
setupInput();
 

