#!/usr/bin/node
const fs = require("fs");

const writeMe = (file_path, text) => {
    fs.writeFile(file_path, text, "utf-8", (err) => {
        if (err) {
            console.error(err);
        }
    })
}
