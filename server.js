const net = require('net');
let information = [];

const server = net.createServer(function (socket) {
 // socket.write('Client logged on');

  socket.setEncoding('utf8');

  information.push(socket);

  socket.write("Enter Username: ");

  socket.loggedName = {};
  socket.loggedName.userName = null;

  socket.on('data', function (data) {
    let info = data.toString();
    console.log(info);

    if(socket.loggedName.userName === null){
      socket.loggedName.userName = data.trim();
      console.log(socket.loggedName);
    }
    else{

      let userName = socket.loggedName.userName
    }

    information.filter(function(element){
      return element !== socket;

    }).forEach(function(element, index){
      // let first = information.indexOf(socket);
      // console.log("CONSOLE: " + element[0]);
      element.write(socket.loggedName.userName + ": " + data);
    });

  });

  socket.on('end', function () {
    // information.splice(information.indexOf(socket,1));
    console.log('client disconnected');

  });
  
});

server.listen(6969, '0.0.0.0', function () {
  console.log('Server on');
});