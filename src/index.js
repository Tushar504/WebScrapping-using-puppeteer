const express=require("express")
const start=require("./puppet")
var cors = require('cors')
var app = express()
 
app.use(cors())
 

app.use(express.json())


app.get("/:cityname",async(req,res)=>{
      try {
          let data=await start(req.params.cityname)
        
          res.status(200).send(data)
      } 
      catch (error) {
          res.send(error)
      }
})

app.listen(1200,async()=>{
    try {
        console.log("listening on port 1200")
    } 
    catch (error) {
        console.log(error) 
    }
})