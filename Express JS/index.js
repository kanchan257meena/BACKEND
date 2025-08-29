const express = require('express')
const app = express()
const port = 3000

console.dir(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  

app.get('/hello', (req, res) => {
  console.log("request received");
  
  res.send('Hello World!')
})

app.get('*',(req,res)=>{
  console.log("this path does not exist");
  res.status(404).send("404: This path does not exist");
  
})
