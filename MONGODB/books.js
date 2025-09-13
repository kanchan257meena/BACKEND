const mongoose=require('mongoose');

main().then(()=>{
    console.log("connection successful"); 
}).catch((err) => console.log(err));

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
// }

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0
    }
});

const Book=mongoose.model("Book",bookSchema);

let book1=new Book({
    title:"Win Your Inner Battles",
    author:"Darius Foroux",
    price:400,
})

book1.save().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
});