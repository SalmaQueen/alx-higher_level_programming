// Write a script that writes a string to a file.

// The first argument is the file path
// The second argument is the string to write
// The content of the file must be written in utf-8
// If an error occurred during while writing, print the error object

const fs = require("fs");

const writeMe = (file_path, text ) =>{

    //we write on the filepath
    fs.writeFile(file_path,text, "utf-8", (err)=>{
        if(err)
        {
            console.error(err);
        }
        })


}
writeMe(process.argv[2], process.argv[3]);
