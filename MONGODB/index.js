const mongoose =require('mongoose');

main().then((res)=>{
    console.log("conn");   
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    city:String,
    age:Number,
})

const User=mongoose.model("User",userSchema);

/*
const user2=new User({
    name:"kanchan",
    city:"jahanpur",
    age:22
});

user2.save().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
});*/

// User.insertMany([
//     {name:"ava",city:"goa",age:23},
//     {name:"bob",city:"mumbai",age:18}
// ]).then((res)=>{
//     console.log(res);
    
// })


User.updateOne({name:'bob'},{age:19}).then((res)=>{
    console.log(res);   
})

User.findByIdAndUpdate("68c384dd3e462eef2e32b82f",{city:"bhopal"},{new:true}).then((data)=>{
    console.log(data);
    
})

User.deleteOne({name:'ava'}).then((res)=>{
    console.log(res);
    
})



