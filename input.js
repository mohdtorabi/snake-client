
let connection;
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
  } else if (data === "a") {
    connection.write("Move: left");
    
  } else if (data === "s") {
    connection.write("Move: down");
   
  } else if (data === "d") {
    connection.write("Move: right");
    
  } else if (data === "i") {
    connection.write("Say: Damn it!");
  } else if (data === "k") {
    connection.write("Say: OK");
  } else if (data === "f") {
    connection.write("Say: ****");
  }
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