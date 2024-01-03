#!/usr/bin/node
const fs = require("fs");

const [file_path, text] = process.argv.slice(2);
fs.writeFile(file_path, text, "utf-8", (err) => {
    if (err) {
        console.error(err.message);
    }
})

