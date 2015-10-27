var net = require('net')

var port = process.argv[2];
net.createServer(function (socket) 
{
  // socket handling logic
  var date = new Date();
  console.log("Full year: " +date.getFullYear());
  console.log("Month: " +date.getMonth());
  console.log("Date: " + date.getDate());
  console.log("Hours: " +date.getHours());
  console.log("Minutes: " +date.getMinutes());

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if(month.toString().length < 2)
  	month = "0" + month.toString();
  var day = date.getDate();
  if(day.length < 2)
  	day = "0" + day;
  var hour = date.getHours();
  if(hour.length < 2)
  	hour = "0" + hour;
  var minute = date.getMinutes();
  if(minute.length < 2)
  	minute = "0" + minute;

  var data = year + "-" + month + "-" + day + " " + hour + ":" + minute;
  socket.end(data);
}).listen(port);