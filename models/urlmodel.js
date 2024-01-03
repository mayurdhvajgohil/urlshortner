const { timeStamp } = require("console");
const mongoose = require("mongoose");
const shortid = require("shortid")

const urlSchema = new mongoose.Schema(
    {
        shortId:{
            type: String, default: shortid.generate ,
                     require:true,
                    unique:true
        },
        requireUrl:{
            type: String, 
            require:true,
            
            },
        visualUrl:[{timeStamp:{type:Number}}]
 },{timeStamp:true}
)

const urldb = mongoose.model("urldb", urlSchema)
module.exports = urldb