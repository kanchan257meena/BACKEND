const express=require("express");
const app=express();

const port =8080;
app.set("view engine","ejs");

// app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static("public/js"));
app.use(express.static("public/css"));



//home 
app.get("/",(req,res)=>{
    // res.send("this is root")
    res.render("home.ejs");
});


//rolldice
app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{dice:num});
});

//instagram temp
app.get("/ig/:username",(req,res)=>{

    const instaData=require("./data.json");
    let {username}=req.params;
    let data =instaData[username];
    console.log(data);
    
    res.render("insta.ejs",{data})

    // const followers=["adam","bob","steve","abc"];
    // let {username}=req.params;
    // res.render("insta.ejs",{user:username,followers:followers});
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});

