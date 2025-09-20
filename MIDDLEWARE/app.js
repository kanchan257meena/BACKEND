const express=require("express");
const app=express();

// app.use(()=>{
//     console.log("i am middleware");
    //  IF WE LET IT BE LIKE THIS NOTHING WILL EXECUTE
// })

app.use((req,res,next)=>{
    console.log("hii");
    next();
        // res.send("Middleware finishedd")
})
 
app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token ==="giveaccess"){
        next();
    }else{
        res.send("ACCESS DENIED");
    }
})

app.get("/api",(req,res)=>{
    res.send("data");
})




//logger
// app.use((req,res,next)=>{
//    req.responsetime=new Date(Date.now()).toString();
//    console.log(req.method,req.path,req.responsetime.slice(0,25),req.hostname);
// next();   
// })



/*
app.use("/random",(req,res)=>{
    console.log("i am only for random");
    next();
    })
*/


 

app.get("/",(req,res)=>{
    res.send("hi i'm home page");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
})

app.listen(8080,()=>{
    console.log("server listening");
    
})