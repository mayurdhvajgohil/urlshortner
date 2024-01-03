const express = require("express")
const app = express()
require("dotenv").config()
const path = require("path")
const router = require("./routes/statiRouter")


const mongoose  = require("mongoose")
const port = process.env.port || 8002
 const bodyparser = require("body-parser")
mongoose.connect(process.env.db_uri)  
.then(()=>console.log("mongodb connected"))
.catch((err)=>{
    console.log("mongo not connected:"+err)
})
app.use(express.json())
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))

app.use("/",router)




app.listen(port,()=>{
    console.log(`connect to port: ${port}`);
})