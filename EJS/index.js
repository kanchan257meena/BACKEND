const express=require("express");
const path=require("path");
const app=express();

const port =3000;
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static("public/js"));
app.use(express.static("public/css"));



//home 
app.get("/",(req,res)=>{
    // res.send("this is root")
    res.render("home");
});


//rolldice
app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{dice:num});
});

//instagram temp
app.get("/ig/:username",(req,res)=>{

    const instaData=require("./data.json");
    let {username}=req.params;
    let data =instaData[username];
    
    
    res.render("insta",{data})

    // const followers=["adam","bob","steve","abc"];
    // let {username}=req.params;
    // res.render("insta.ejs",{user:username,followers:followers});
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});


