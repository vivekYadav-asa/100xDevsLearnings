 const thenable={
    then:function(onFulfilled){
        setTimeout(()=>onFulfilled(42),1000);
    }
 };
  async function main(){
    await thenable
    console.log("hi there");
  }
  main();
const fs= require("fs")
function main(fileName){//process argv gives the file name we give it node 
    fs.readFile(fileName,"utf-8",function(err,data){
        let total=0;
        data=data.trim();
        for(let i=0;i<data.length;i++){
            if(data[i]===' '){
                total++;
            }
        }
        console.log(total);
    });
} 
main('a.txt');
//as-1create a commmand line interface that lets the user spacify a file path andthe nodejs processs counts the number of word inside it
// const fs=require('fs');
// const { command }= require('commander');
// const program=new command();
// program
// .name('counter')
// .description('cli to do file based task')
// .version('0.8.0')
// program.command('count')
// .description('count the unmber of words in a file')
// .argument('<file>','count file')
// .action((file)=>{
// fs.readFile(file,'utf-8',(err,data)=>{
// if(err){
// console.log(err);
// } else{
//     let words=0;
//     for(let i=0; i<data.length;i++){
//         if(data[i]===' '){
//             words++;
//         }
//     }
//     console.log(`there are ${words+1} words in ${file}`);
    
// }
// });

// });
// program.parse();