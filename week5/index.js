//headers->http headers are the key value pairs that are sent between a client and a server in an http req and response.they convey metadata
//  about the request and response such as content type and auth information etc.
const express=require('express')
const app=express();
let requestCount =0;
function requestIncrease(){
    requestCount=requestCount+1;
    console.log("total number of request =" + requestCount);
    
}
// better routing ,add database,middleware
app.get('/add',function(req,res){
    requestIncrease()
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
       answer:a+b
    })
})
app.get('/multiply',function(req,res){
    requestIncrease();
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
       answer:a*b
    })
})
app.listen(3000)
