var fs=require('fs');

console.log('A');

var result=fs.readFileSync('example/text.txt','utf-8');

console.log(result);

console.log('C');