var fs=require('fs');

console.log("첫번째 기능");
fs.readFile('example/text.txt','utf-8',function(err,result){
    if(err){
        console.error(err);
        throw err;
    }else{
        console.error("두번째 기능 파일읽어오느라 조금 느림");
        console.log(result);
    }
});

console.log('마지막 기능');