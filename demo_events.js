const fs = require('fs');
const rs = fs.createReadStream('./File/demo_file1.html');

rs.on('open',function(){
    console.log('File is opened!')
});

