//headers->http headers are the key value pairs that are sent between a client and a server in an http req and response.they convey metadata
//  about the request and response such as content type and auth information etc.
const express=require('express')
const app=express();
app.get('/sum',function(req,res){
    res.json({
        msg:'done'
    })
})
app.listen(3001)