// const express=require('express')

// function calculateSum(n){
//     let ans=0;
// for(let i=0; i<=n;i++){
//     ans=ans+i;
// }
// return ans;
// }
// const app=express();
// app.get("/",function(req,res){
//     const n=req.query.n;
//     const ans=calculateSum(n);
//     res.send(ans);

// })
// app.listen(3000)//deciding the add
// request methods
// get ,push ,put, delete
//learn about filters
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
// route handlers
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
*/
