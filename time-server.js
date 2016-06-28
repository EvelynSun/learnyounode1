var net = require('net');

function convert(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
 var d = new Date();
 var s = d.getFullYear() + "-"
    + convert(d.getMonth() + 1) + "-"
    + convert(d.getDate()) + " "
    + convert(d.getHours()) + ":"
    + convert(d.getMinutes()) + "\n";
  socket.end(s);
  //console.log(s)
});
server.listen(process.argv[2]);