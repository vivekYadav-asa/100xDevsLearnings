// Html, Css and Js were meant to be browser libraries as they were supposed to be used on browsers only

// Node js is an open-source JS runtime that allows you to execute JavaScript code on the server side. It's built
//  on Chrome's V8 JavaScript engine.
// Node js was introduced to make us run js code on both frontend and backend
// Runtime is a Enviornment where JS code can be executed

// V8 engine?
// The V8 engine is an open-source JavaScript engine developed by Google. It is used to execute JavaScript code 
// in various environments, most notably in the Google Chrome web browser. Firefox has its own js engine


// Fs library is only availaible on node, not in browsers for security and privacy
// Similay DOM is not a part of Node as it doesn't make sence there

// TlDr; Nodejs is a js runtime that uses v8 engine

// Bun is another js runtime written using zig which is taking over nodejs, and is replacing it, as node is 
// very slow, bun is just an interpreter like node(next js projects arent compatible with node js)


// Nodejs, bun and browsers are just trying to implement ecma script standards thats it


// run npm init -y
//contents of package.json file
/* {
  "name": "week4",   //name of website/library/app   
  "version": "1.0.0", //change this version as you update the code
  "main": "classNotes4.1.js",  //entry point
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" //this lets us add multiple scripts, which can be reun using npm run test or npm run start, can use whatever nape you want
    "start": "node classNotes4.1.js" //try running this in terminal using npm run start, after adding this to package.json
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "", //all these are meta data
  "dependencies" : {
    "chalk": "^5.3.0" versions: major.minor.patch(change major for breaking change, change minor for small changes-this changed version is supposed to be compatible with the prev version, change patch when fixing small bugs), ^5 (^)caret sign suggests to update the version whenever new comes out but dont go over major version 5(i.e. to 6 automatically) if version is written without ^ sign the version written will be installed. The main problem of this arises in developement when multiple folks are cloning this repository, they get different version installed for themselvs due to this ^ symbol or when the code is deployed the server might have different version installed, to solve this a package-lock.json file conmes in handy which makes sure that same version of the package is installed for everyone. Changing version in package and running npm run will automatically install that version
    "chalk": "latest" will install latest version
    The package-lock, json records the exact versions of all dependencies and their dependencies (sub-dependencies) that are installed at the time when npm install was run.
    //should we deploy package-lock files on github??? The answer is yes, we gotta make sure that everyone has same version installed locally
    //this section along with scripts is most inportant
    //this contains all the dependencies required by codebase, can be used to keep track of all the dependencies used,
    when one package is installed it also contains some dependencies, those dependencies have their own set of dependencies(sub-dependencies), that's why node modules are so heavy
    when one run npm install all dependencies automatically gets install, theses no need of node modules folder to be pushed to github
  }

  all this details comes in handy when deploying an npm package to external registry
*/




// NPM(node package manager), for js used for managing library/external dependencies/packages(reusable code)
//can deploy my package at npm registory

// const express=require('express')

// function calculateSum(n){
//     let ans=1;
// for(let i=1; i<=n;i++){
//     ans=ans*i;
// }
// return ans;
// }
// const app=express();
// app.get("/",function(req,res){
//     const n=req.query.n;
//     const ans=calculateSum(n);
//     res.json({
//       mesage:ans
//     })

// })
// app.listen(3001)
// //deciding the add
// request methods
// get ,push ,put, delete
//learn about filters
//kidney game
const express =require('express')

const app = express()
const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}]
app.use(express.json())
app.get("/",function(req,res){
const JohnKidneys=users[0].kidneys;
const numberOfKidneys=JohnKidneys.length;
let numberOfHealthyKidneys=0;
for(let i=0; i<JohnKidneys.length;i++){
    if(JohnKidneys[i].healthy){
        numberOfHealthyKidneys=numberOfHealthyKidneys+1;
    }
}
const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
})
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:'Done'
    })

}) 
app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true; 
    }
    res.json({})

})
//removing all the unhealthy kidney
app.delete("/",function(req,res){
    //you should return a 411
    const newKidneys=[];
    for(let i=0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg:'done'
    })
})
app.listen(3002,()=>{
    console.log("this is runing on port 3000");
})
// })
// const express =require('express')
// const app=express();
// // route handlers
// app.get('/',function(req,res){
// res.send("hello world");
// })
// port to listen at
// app.listen(3000) 
//     console.log("this is runing on port 3000");
    
// });

// middleware
/*
maddleware  can be reused 
// */
// const express =require('express')
// const app =express();
// //function that returns a boolean true if age is more than 14
// function isOldEnoughMiddleWare(req,res,next){
//     const age =req.query.age
//     if(age>=14){
//        next();
//     }
//     else{
//         res.status(411).json({
//             msg:'you are not oldenough yet'
//         })
//     }
// }
// app.use(isOldEnoughMiddleWare)
// app.get('/ride1',  isOldEnoughMiddleWare,function(req ,res){// either you can call the middleware function inside the app.get or
// //  you want you can declare outside and above it only the above case will work correctly only tigger all the things below it

//     res.json({
//         msg:'you are elgible for this ride',
//     })
// })
// app.listen(3005)
