//headers->http headers are the key value pairs that are sent between a client and a server in an http req and response.they convey metadata
//  about the request and response such as content type and auth information etc.
const express=require('express')
const app=express();
app.get('/add/:a/:b',function(req,res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
       answer:a+b
    })
})
app.listen(3000)