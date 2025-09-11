const express = require("express");
const app=express();
const path=require("path");
const port =8080;
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
    
})

app.get('/',(req,res)=>{
    console.log("home page");
    res.send("hii")
})


let posts=[
     {  
        id:uuidv4(),
        username:"Bhopal",
        content:"it is city of lakes"
    },
     {
        id:uuidv4(),
        username:"Shimla",
        content:"it is a beautiful hill station"
    },
     {
        id:uuidv4(),
        username:"Delhi",
        content:"Capital city of india"
    },
     {
        id:uuidv4(),
        username:"kerala",
        content:"Southern state full of greenary"
    },

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.post("/posts",(req,res)=>{
    let {username ,content}=req.body;
    let id=uuidv4();
    posts.push({
       id, username,content,
    })
    res.redirect("/posts");
    
});

app.get("/posts/:id",(req,res)=>{
   
    let {id}=req.params;
    let post=posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{ post });
    // res.redirect("/posts");
      
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs",)
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
     let post=posts.find((p) => id === p.id);
    post.content=newcontent;
    console.log(post);
     
    
})

app.get("/posts/:id/edit",(req,res)=>{
      let {id}=req.params;
      let post=posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
      let {id}=req.params;
       posts=posts.filter((p) => id !== p.id);
    //   res.send("delete");
res.redirect("/posts");
   
})


