var lengh=18;
var lstName="abcdefg";
var x={a:"abcd", b:"efgh"};
var y=14;
var z=4;
console.log(x);

var a=y-z;
var b=y/z;

console.log(a);
console.log(b);

var p1=2;
var p2=4;
var a=myFunction(p1,p2);
console.log(a);

function myFunction(p1, p2){
    return p1 * p2;
}

var car1={
    name:"sonanta",
    ph:"500ph",
    start : function(){
        console.log("engine is starting");
    },
    stop : function(){
        console.log("engine is stopping");
    }
}

var car2={
    name:"sonanta",
    ph:"500ph",
    start : function(){
        console.log("engine is starting");
    },
    stop : function(){
        console.log("engine is stopped");
    }
}

console.log(car1);

console.log(car1.start);

var array=[car1,car2];

console.log(array[0].start);
