//  CASE: 1

// // Node.js program to demonstrate the
// // fs.writeFileSync() method

// Import the filesystem module
const fs = require('fs');

let data = "This is a file containing a collection"
		+ " of programming languages.\n"
+ "1. C\n2. C++\n3. Python";

// Writing into the file, If no file is available then it will create a new file
// fs.writeFileSync("programming.txt", data);

// Appending into the file
fs.appendFileSync("programming.txt",'Hi, I am new to node js')

//CASE 2

// const add = require("./utils.js");
// const sum = add(4, -2);

// console.log("sum ===>", sum);

