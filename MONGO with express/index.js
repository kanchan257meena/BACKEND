const express=require('express');
const app=express();
const mongoose =require('mongoose');
const path=require('path');
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then((res)=>{
    console.log("connection successful");   
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

const chat1=new Chat({
    from:"Ishan",
    to:"kanchan",
    msg:"Sorry I'm late",
    created_at:new Date()
});

chat1.save().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})


app.listen(8080,()=>{
    console.log("server is listening");
    
})

app.get("/",(req,res)=>{
    res.send("root");
})


