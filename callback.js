var fs=require('fs');


function callbackFunc(callback){
fs.readFile('example/text.txt','utf-8',function(err,result){
    if(err){
        console.error(err);
        throw err;
    }else{
        console.error("두번째 기능 파일읽어오느라 조금 느림");
        callback(result);
    }
});
}

console.log("A");
callbackFunc(function(data){
    console.log(data);
    console.log("c");
}) ;