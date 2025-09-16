const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("connection successful");   
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

let allChats=[
    {
        from:"Kanchan",
        to:"Shivani",
        msg:"Good Morning",
        created_at:new Date(),
    },
     {
        from:"Kanchan",
        to:"ishan",
        msg:"let's go out tommorow",
        created_at:new Date(),
    },
     {
        from:"Kanchan",
        to:"Namrata",
        msg:"chai peene chalte h",
        created_at:new Date(),
    },
     {
        from:"Kanchan",
        to:"Aastha",
        msg:"Hii",
        created_at:new Date(),
    },
]

// Chat.insertMany(allChats);
//  const res = await Chat.insertMany(allChats); 
}

// 