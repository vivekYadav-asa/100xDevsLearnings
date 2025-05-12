const bcrypt=require('bcrypt');
const express = require("express");
const { UserModel,TodoModel}=require("./db")
const jwt=require("jsonwebtoken");
const mongoose=require('mongoose');
const JWT_SECRET="abx1234";
const { z }=require('zod');
const app = express();
app.use(express.json());
 mongoose.connect("mongodb+srv://vivek:Wxbgm7cGxouQlPlx@cluster0.xmpjrxm.mongodb.net/todos-app-week7")
app.post("/signup", async function(req, res) {
    const requireBody=z.object({
        //check that password has 1 uppercase 1 lowercase and special caracter
        email:z.string().min(10).max(50).email(),
        name:z.string().min(4).max(20),
        password:z.string().min(8).max(20).refine((value) => /[a-z]/.test(value), {
            message: "Password must contain at least one lowercase letter.",
        })
        .refine((value) => /[A-Z]/.test(value), {
            message: "Password must contain at least one uppercase letter.",
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: "Password must contain at least one special character.",
        })
    })
    const parasedDataWithSuccess=requireBody.safeParse(req.body);
    if(!parasedDataWithSuccess.success){
        res.json({
    message:"incorecct format",
    error:parasedDataWithSuccess.error
        })
        return
    }

    const email =req.body.email;
    const password=req.body.password;
    const name = req.body.name;
    
    const hashedPassword= await bcrypt.hash(password,5);
    console.log(hashedPassword);
    
    await UserModel.create({
        email:email,
        password:hashedPassword,
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
    
    })
    console.log(user);
    const passwordMatched= await bcrypt.compare(password,user.password)
    if(passwordMatched){
        const token=jwt.sign({
            id:user._id.toString()
        }, JWT_SECRET);
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


app.post("/todo", auth,  async function(req, res) {
    const userId=req.userId;
    const title=req.body.title;
    const done=req.body.done;
  await  TodoModel.create({
        title,
        userId,
        done
    })
res.json({
    message:"todo created"
})
});


app.get("/todos", auth, async function(req, res) {
    const userId=req.userId;
    const todos=await TodoModel.find({
        userId:userId
    })
    res.json({
 message:"go to gym"
    })
});
function auth(req,res,next){
const token =req.headers.token;
const decodedData =jwt.verify(token,JWT_SECRET)
if(decodedData){
    req.userId = decodedData._id;
    next();
}
else{
    res.status(403).json({
        message:"incorrect credentials"
    })
}
}


app.listen(3000);