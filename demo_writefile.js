const fs = require('fs');

fs.writeFile('./File/demo_writefile.html','<h1>Hello World!, I am writefile.</h1>',function(err){
    if(err) throw err;
    console.log('replaced!');
});