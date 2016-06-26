var http = require('http');

var url = process.argv[2];


http.get(url, function (response) {
    var totalData = "";
  response.setEncoding('utf8');

  response.on('data', function (data) {
      totalData += data;
 
   
  })
  response.on('end',function(){
      console.log(totalData.length);
      console.log(totalData);
  });
  
  
});
