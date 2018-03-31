console.log("Hello World");

const os = require("os");
const fs = require("fs");
 const notes = require("./notes.js");
const _ = require("lodash");

let user = os.userInfo();
fs.writeFile("Greeting.txt",` Hello User ${user.username}, Greetings!`,(err)={
    if(err){
        console.log(err);
    }
});
let newNote = notes.addNotes("AbdaKadabda!!!");
console.log(newNote);
