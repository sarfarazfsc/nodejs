# There are three ways for creating a new file 
 1. appendFile()
 2. open()
 3. writeFile()

 1.appendFile() : This method is used to create new file.If the file already exist then append content to the file.

     Ex: 
          const fs = require('fs');
           
             fs.appendFile('demo_appendFile.html','Hello World!, I am appendFile',function(err){
                 if(err) throw err;
                 console.log('Saved!')
             });

 2.open() : This  method is used to create file and also gives permission for writing.It takes flag in second argument.
    
    Ex:    
        const fs = require('fs);

          fs.open('demo_openfile.html','w',function(err,file){
              if(err) throw err;
              console.log('Saved!');
          });

 3.writeFile() : This method is used to create new file.It replace the file if exist.
     
    Ex: 
        const fs = require('fs');

        fs.writeFile('demo_writeFile.html','Hello World!',function(err){

               if(err) throw err;
               console.log('replaced!')
        });