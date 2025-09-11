const {faker} =require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride =require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'mydata',
    password:'kanchan257meena'
});




// let user=["123","123_user","abc@gmail.com","abc"];


//using faker 
let getUser =()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
      faker.internet.password()
  ];
}



//setting express

//HOME PAGE
app.get("/",(req,res)=>{
    let q=`select count(*) from user`;
    try{
    connection.query(q,(err,result)=>{
    if(err)throw err;
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
     });}
    catch(err){
    console.log(err);  
    res.send("error in db");  
     }
    // res.send("welcome to home page");
   });

//USER ROUTE
   app.get("/user",(req,res)=>{
    let q=`select * from user`;
    try{
    connection.query(q,(err,result)=>{
    if(err)throw err;
   let data =result;
//    res.send("hi");
   
    res.render("user.ejs",{data});
     });}
    catch(err){
    console.log(err);  
    res.send("error in db");  
     }
   
   });

//EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;
    try{
    connection.query(q,(err,result)=>{
    if(err)throw err;
   let data =result[0];
     res.render("edit.ejs",{data});
     });}
    catch(err){
    console.log(err);  
    res.send("error in db");  
     }
    
})

//UPDATE
app.patch("/user/:id",(req,res)=>{
     let {id}=req.params;
     let {password:formpass,username:newusername}=req.body;
     console.log("Form password:", formpass);
// console.log("DB password:", user.password);
console.log("New Username:", newusername);

    let q=`select * from user where id='${id}'`;

      try{
    connection.query(q,(err,result)=>{
    if(err)throw err;
   let user =result[0];
   if(formpass!=user.password){
    res.send("wrong password");
   }
   else{
    let q2 = "UPDATE user SET user=? WHERE id=?";
    connection.query(q2, [newusername, id], (err, result) => {
        if (err) throw err;
        res.redirect("/user");
    });
   }
    //  res.render("edit.ejs",{data});
     });}
    catch(err){
    console.log(err);  
    res.send("error in db");  
     }
    
   
})





app.listen("8080",()=>{
    console.log("port");
    
});









/*
let q="insert into user (id,user,emain,password) values?";

let data=[];
for(let i=0;i<10;i++){
  data.push(getUser()); 
}
*/

//try catch to insert data;

/*
try{
connection.query(q,[data],(err,res)=>{
    if(err)throw err;
    console.log(res);
    
});}
catch(err){
    console.log(err);    
}

connection.end();*/