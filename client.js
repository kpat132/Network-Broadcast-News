const net = require('net');
const client = new net.connect({ port: 6969, host: '0.0.0.0' }, () => {

  console.log("Connected");

  process.stdin.pipe(client);
  client.pipe(process.stdout);

});

client.on('data', (data) => {
  let info = data.toString();
  //console.log(info);
});

client.on('end', () => {
  console.log('Disconnected from server')
});
