const mongoose =require('mongoose');
const {Schema}=mongoose;

main().then((res)=>{
    console.log("connecion successful");   
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
  
}

const userSchema=new Schema({
    username:String,
    Addresses:[
        {   
            _id:false, //to not make different id for address
            location:String,
            city:String,
        }
    ]
});

const User=mongoose.model("User",userSchema);

const addUser=async ()=> {
    let user1=new User({
        username:"Sherlockholmes",
        Addresses:[{
            location:"221b Baker street",
            city:"London"
        }]
    });
    user1.Addresses.push({location:"P32 WallStreet",city:"London"})
     let result = await user1.save();
    console.log(result);
    
}

addUser();