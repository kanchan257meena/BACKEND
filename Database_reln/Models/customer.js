const { log } = require('console');
const mongoose =require('mongoose');
const {Schema}=mongoose;

main().then((res)=>{
    console.log("connecion successful");   
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
  
}
const orderSchema=new Schema({
  item:String,
  price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {type: Schema.Types.ObjectId,
         ref: 'Order'}
    ]
});


/*
customerSchema.pre("findOneAndDelete",async()=>{
  console.log("PRE MIDDLEWARE");
  
})
  */


customerSchema.post("findOneAndDelete",async(customer)=>{
  // console.log("POST MIDDLEWARE");
  // console.log(data);
  if(customer.orders.length){
   let result=await Order.deleteMany({_id:{$in :customer.orders}});
   console.log(result);
   
  }
  
  
})

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

//creating order and pushing order
// const addCustomer= async ()=>{
//   let user1= new Customer({
//     name:"Kanchan",
//   });
//   let order1=await Order.findOne({item:"Chips"});
//     let order2 =await Order.findOne({item:"Samosa"});

//     user1.orders.push(order1); 
//     //in mongodb only the order id will be pushed as a reference 
//     // not the complete object;

//     user1.orders.push(order2);

//     let res=await user1.save();
//     console.log(res);
    
// };


// addCustomer();


//populate
const findCustomer= async ()=>{

    let result=await Customer.find({}).populate("orders");
    console.log(result);
    
};

// findCustomer();



// const addOrders= async () =>{
//    let res =  await Order.insertMany([
//         {item:"Samosa",price:12 },
//         {item:"Chips",price:10},
//         {item:"Chocolate",price:40},
//     ]);
//  console.log(res);
 
// }

// addOrders();



// ADDING AND DELETING CUST / ORDER

const addCust=async()=>{
  let newCust=new Customer({
    name:"shivani",
  });

  let newOrder= new Order({
    item:"noodles",
    price:200,
  })

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("new cust added");
  
};

// addCust();

//now we want that when we delete the customer , it's order get's deleted with it as well

const delCust=async()=>{
  let data=await Customer.findByIdAndDelete("68e200dec3602d2dc2bac804");
  console.log(data);
  
}

delCust();