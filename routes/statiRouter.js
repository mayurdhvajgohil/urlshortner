const mongoose  = require("mongoose")
const express = require("express")
const router = express.Router()
const urldb = require("../models/urlmodel")
const controllers = require("../controllers/controllers")
const shortid = require('shortid')
const ax = require("axios")

router.get("/",async(req,res)=>{
  const urldbs = await urldb.find({})

    res.render("home",{urldbs:urldbs})
   })

router.post("/urldbs",async(req,res)=>{
   const body= req.body
   const uuu = body.urlname
   const short = shortid()
   const urldbs =  await urldb.create({
        requireUrl:uuu,
        shortId:short
      })
urldbs.save(urldbs)
console.log(short)
console.log(uuu)
console.log(urldbs)
    res.redirect("/")    
    
    })
    







module.exports = router