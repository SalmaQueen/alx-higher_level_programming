#!/usr/bin/node
const fs = require("fs");

//check if the file exists after second argument

if(process.argv.length > 3)
{
    console.log("The file does not exists");
    process.exit(1);
}

else{
   //use non-blocking(Asychronous method, readFile and not readFileSync)
   fs.readFile(process.argv[2], "utf-8", (error, file_content)=>{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(file_content);
    }
   })
}