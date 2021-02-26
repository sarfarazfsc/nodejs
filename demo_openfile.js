const fs = require('fs');

fs.open('./File/demo_openfile.html','w',function(err,file){
    if(err) throw err;
    console.log('saved!');
})