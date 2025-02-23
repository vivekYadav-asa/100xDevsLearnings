// Class in js 
//  m1
// const rect1={
//     width:2,
//     height:3,
//     color:"yellow",
// }
// function area(rect){
//     return rect.width*rect.height;
// }
// const ans=area(rect1);
// console.log(ans);
//using class
//  class Rectangle{
//     constructor(width,height,color){
//         this.width=width;// give acces to current value
//         this.height=height;
//         this.color=color;
//     }
//     area(){
//         const area=this.width*this.height;
//         return area;
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`);
        
//     }
//  }
//  const rect= new Rectangle(2,4);//istance ofd the rectangle class,object of the rectangle class 
//  const area=rect.area();
//  console.log(area);
// const date=new Date();
// console.log(date);

// console.log(date.getMinutes());
// //map
// const map=new Map();
// map.set('name','harkirat');
// map.set('age',30);
// console.log(map.get('name'));
// promises = promise class gives you  a promise ,that i will return u something in future
function logName(){
    // console.log("harkirat");
    
}
// setTimeout(logName,3000);// callback approach and promises aprroach
// defining a promises is hard .// using a promises is easy
// function waitfor3s(resolve){
//  setTimeout(resolve,3000)
// }
// function setTimeoutPromisifed(){
//     return new Promise(waitfor3s)
// }

// function main(){
//     // console.log("man is called");
    
// }
// setTimeoutPromisifed().then(main)
// method 2
//  function random(resolve){
//     // resolve is also a func
//     resolve();

//  }
// const p=new Promise(random)// supposed to return u something eventually.
// console.log(p);


// //using the eventual value returned by the promise --> easy
// function callback(){
//     console.log("promisefied succesed");
    
// }
// p.then(callback);
// read from the file
// const fs=require("fs");

// function callback(contents){
//     console.log(contents);
// }


function readTheFile(callback){
    // do ur thing , whenever u have the final value , call sendthe finallvaluehere(finalvalue);

    fs.readFile("a.txt","utf-8",function(err,data){
        callback(data);
    })
}
// readTheFile(callback)

function readFile(fileName){
    //read the file and return its value
    return new Promise(readTheFile);
}
const p=readFile();

// // p.then(callback)
// function setTimeoutPromisifed(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
// }
// //setTimeout => promisfied setTimeout
// function callback(){
//     console.log(" 1 sec has passed");
// }
// setTimeoutPromisifed(1000).then(callback);


 
 

