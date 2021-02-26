
const fs = require('fs');

fs.appendFile('./File/demo_appendfile.html','<h1>Hello World! I am appendFile</h1><br>',function(err){
    if(err) throw err;
    console.log('saved!');
});