//const connect = require('connect');
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("pumkin' spice latte connected");
    conn.write("Name: Moo");
    conn.write("Say: Boooo!");

    
    
    
  });
  

 

 
  return conn;
};




module.exports = {connect};