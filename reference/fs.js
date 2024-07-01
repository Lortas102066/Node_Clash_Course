const fs = require('fs');
const path = require('path');

// // Create folder
// fs.mkdir(path.join(__dirname, '/test'),{}, function(err){
//     if (err) throw err;
//     console.log('Folders created successfully');
// });

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', function(err){
//     if (err) throw err;
//     console.log('File written to....');

//     //File Append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'My Name is Mitsuki', function(err){
//         if (err) throw err;
//         console.log('File written to....');
//     });
// });

//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf-8', function(err, data)  {
    if (err) throw err;
    console.log(data);
});

//Rename the File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err)  {
    if (err) throw err;
    console.log('File Renamed...');
});