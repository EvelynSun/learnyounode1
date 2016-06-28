var http = require('http');

var urls = [],
    dataList =[];

for(var i=2;i<=4;i++){
   var url = process.argv[i];
    urls.push(url);
}
for(var j=0; j<urls.length;j++){
    (function(j){
        http.get(urls[j], function (response) {
    var totalData = '';
  response.setEncoding('utf8');

  response.on('data', function (data) {
      totalData += data;

   
  })
  response.on('end',function(){
      var count = 0;
      //if(totalData )
      dataList[j] = totalData;
     for (j = 0; j < dataList.length; j++) {
          if (dataList[j] != null) count++;
        }
     // console.log(totalData.length);
     //  console.log(dataList[j]);
     
     if(count==urls.length){
         print();
     }
  });
  
 
  
  
});
    })(j)
}
  
  function print(){  
 for(var k=0; k<dataList.length;k++){
      console.log(dataList[k]);
  }
}