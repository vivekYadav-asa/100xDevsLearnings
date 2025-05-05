const express = require("express");
const { UserModel,TodoModel}=require("./db")
const jwt=require("jsonwebtoken");
const JWT_SECRET="secret"
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email =req.body.email;
    const password=req.body.password;
    const name = req.body.name;
    await UserModel.insert({
        email:email,
        password:password,
        name:name
    
    })
    res.json({
        message:"you are logged in"
    })
});


app.post("/signin",async function(req, res) {
    const email =req.body.email;
    const password=req.body.password;
    const user=await UserModel.findOne({
    email:email,
    password:password    
    })
    console.log(user);
    
    if(user){
        const token=jwt.sign({
            id:user._id
        });
        res.json({
           token:token 
        })
    } 
    else{
        res.status(403).json({
            message:"incorrect token "
        })
    }
});


app.post("/todo", auth, function(req, res) {
const userId=req.userId;
res.json({
    userId:userId
})
});


app.get("/todos", auth, function(req, res) {
    const userId=req.userId;
    res.json({
        userId:userId
    })
});
function auth(req,res,next){
const token =req.header.token;
const decodedData=jwt.verify(token.JWT_SECRET)
}
if(decodedData){
    req.userId=decodedData.userId;
    next();
}
else{
    res.status(403).json({
        message:"incorrect credentials"
    })
}

app.listen(3000);