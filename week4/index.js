//as-1create a commmand line interface that lets the user spacify a file path andthe nodejs processs counts the number of word inside it
//  const thenable={
//     then:function(onFulfilled){
//         setTimeout(()=>onFulfilled(42),1000);
//     }
//  };
//   async function main(){
//     await thenable
//     console.log("hi there");
//   }
//   main();
const fs= require("fs")
function main(fileName){//process argv gives the file name we give it node 
    fs.readFile(fileName,"utf-8",function(err,data){
        let total=0;
        for(let i=0;i<data.length;i++){
            if(data[i] == ' '){
                total++;
            }
        }
        console.log(total +1);
    });
} 
main('a.txt');