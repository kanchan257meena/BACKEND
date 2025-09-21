const express=require("express");
let app=express();
const ExpressError=require("./ExpressError");


app.listen(8080,()=>{
    console.log("server listening to port 8080");
    
})

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    else{
    throw new ExpressError(401,"ACCESS DENIED");}
}



app.get("/api",checkToken,(req,res)=>{
    res.send("home page");
});

app.get("/admin",(req,res)=>{
   throw new ExpressError(403,"Access to admin is Forbidden");
});


app.use((err,req,res,next)=>{
 
    let{status = 500,message="admin not found"}=err;
    res.status(status).send(message);
    
});



// using async Wrap {it's for async fn }
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

app.get("/chats/:id",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render(edit.ejs,{chat});
}));




















