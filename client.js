//const connect = require('connect');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("pumkin' spice latte connected");
  });

  return conn;
};




module.exports = connect;