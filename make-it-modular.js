program.js:

var mymodule = require('./mymodule.js') 
mymodule(process.argv[2],process.argv[3],function(err,data){
    if(err){
        console.log("Error")
    }else{
        
          data.forEach(function (file) {  
        console.log(file)  
      })  
        }
    
})


mymodule.js:
 var fs = require('fs') 
  var path = require('path') 

module.exports= function(dir,exten,callback){
    fs.readdir(dir,function(err,list){
        
        if(err){
            callback(err)
        }else{
           list = list.filter(function (file) {  
          return path.extname(file) === '.' + exten  
        })  
        

        callback(null, list)  
        }
    })
}
