const express = require('express');   // <--- import express

const app = express();
const port = 3000

console.dir(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  

app.get('/hello', (req, res) => {
  console.log("request received");
  
  res.send('Hello World       !    ')
})
app.get('/:username/:id',(req,res)=>{
  // console.log(req.params);
  let{username,id}=req.params;
  res.send(`hello this is @${username}`);
  
});

app.get((req,res)=>{
  console.log("this path does not exist");
  res.status(404).send("404: This path does not exist");
  
});
