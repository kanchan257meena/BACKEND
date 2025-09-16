const express=require('express');
const app=express();
const mongoose =require('mongoose');
const path=require('path');
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


main().then((res)=>{
    console.log("connection successful");   
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}


app.listen(8080,()=>{
    console.log("server is listening");
    
})

app.get("/",(req,res)=>{
    res.send("root");
})


//INDEX ROUTE
app.get("/chats",async (req,res)=>{
  let data= await Chat.find()
//   res.send("working");
res.render("home.ejs",{data});
});

//NEW CHAT ROUTE

app.get("/chats/new",(req,res)=>{
   res.render("new.ejs"); 
})

//POST REQ - to insert the chat in db

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
   newChat.save().then((res)=>{
    console.log("chat was saved");
    
   }).catch((err)=>{
    console.log(err);
    
   })
   res.redirect("/chats")
    
});


//edit 
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
   let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});



