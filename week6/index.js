// authentication 
const express = require('express')
const jwt = require("jsonwebtoken") 
const JWT_SECRET="randomharkiratiLove"
const app=express();
app.use(express.json())
const users=[];
function logger(req,res,next){
    console.log(req.method+"request came");
    next();
}
// console.log(users);

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
//          'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }
//localhost 3002
app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})
app.post('/signup',logger,function(req,res){
const username=req.body.username;
const password=req.body.password;
console.log(username);

users.push(
    {
        username:username,
        password:password
    }
)
res.json({
    msg:"you are sigup succesfully"
})
})

app.post("/signin",logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
//   m2 for finding the user is same or not to whom we have to return a token 
  let userFound=null;
  for(let i=0; i<users.length;i++){
  if(users[i].username==username && users[i].password==password){
  userFound=users[i];
  }
  }
     

    // const user = users.find(function(u){
    //     if(u.username==username&&u.password==password){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // });

    if (userFound) {
        // const token = generateToken();
        // user.token = token;//this line of code push the token in the global variable users
        const token =jwt.sign({
            username:username
        },JWT_SECRET)
        res.send({
            token:token
        })
        // console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
    
});
//using middleware instead of calling same function again and again in all routes
function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username
        next();
    }
    else{
        res.json({
            message:"you are not logged in"
        })
    }
}
app.get('/me',logger,auth,function(req,res){
// const token=req.headers.token;
// const decodedInformation=jwt.verify(token,JWT_SECRET);//{username:"harkiart"}
// const username=decodedInformation.username;
let userFound=null;
for(let i=0; i<users.length;i++){
    if(users[i].username==req.username){
        userFound=users[i];
    }
}

    res.json({
        username:userFound.username,
        password:userFound.password
    })
})

app.listen(3002);
