
const fs = require('fs');

fs.unlink('./File/temp.html',function(err){
    if(err) throw err;
    console.log('File deleted!');
});