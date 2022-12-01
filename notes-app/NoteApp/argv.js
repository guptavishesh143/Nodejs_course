//TO TAKE ARGUMENT IN COMMAND-LINE

//process argv is returning array 

// 1st : node.js version 
// 2nd : path of the file 
// 3rd : argument which we have input after "nodemon fileName.js anyString"

console.log(process.argv[2]);

const name = process.argv[2]

if( name === 'vishesh'){
    console.log(`Hello ${name}`);
}
