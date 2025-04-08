// authentication 
const express = require('express')
const app=express();
app.use(express.json())
const users=[];
console.log(users);

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
         'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
app.post('/signup',function(req,res){
const username=req.body.username;
const password=req.body.password;
console.log(username);

users.push(
    {
        userName:username,
        password:password
    }
)
res.json({
    msg:"you are sigup succesfully"
})
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    /*
  m2 for finding the user is same or not to whom we have to return a token 
  let userFound=null;
  for(let i=0; i<users.length;i++){
  if(users[i].userName==userName && users[i].password==password){
  userFound=users[i];
  }
  }
     */

    const user = users.find(function(u){
        if(u.username==username&&u.password==password){
            return true;
        }
        else{
            return false;
        }
    });

    if (user) {
        const token = generateToken();
        user.token = token;//this line of code push the token in the global variable users
        res.send({
            token
        })
        // console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
    
});
app.get('/me',function(req,res){
const token=req.headers.token;

let Founduser=null;
for(let i=0; i<users.length;i++){
    if(users[i].token==token){
        Founduser=user[i];
    }
}
if(Founduser){
    res.json({
        username:Founduser.username,
        password:Founduser.password
    })
}
else{
    res.json({
        msg:"inalied token "
    })
}
})

app.listen(3003);
