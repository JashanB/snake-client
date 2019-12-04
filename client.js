const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Hello from snek!');;
  });
  conn.on('connect', () => {
    conn.write('Name: BOB')
  })
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};
module.exports = connect;
