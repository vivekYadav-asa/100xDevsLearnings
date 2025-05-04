import mongoose, { connect } from "mongoose";

connectToMongo()
async function connectToMongo() {
    try{
        const schema=new mongoose.schema({
            name:string
        })
        const model=mongoose.model('new',schema);
        const db=await connect("mongodb+srv://vivek:Wxbgm7cGxouQlPlx@cluster0.xmpjrxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        const vivek=model({
            name:"rajveeerr"
        })
        await vivek.save();
    }
    catch(err){
        console.log(err);
        
        console.log("error in connecting ");
    }
}
