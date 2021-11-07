const express= require('express')
const router= express.Router()
const Invoice=require('../models/invoice.js')



router.get('/',(req,res)=>{
  res.render('home',{
  })
})

//create invoice page
// GET /create
router.get('/create',async(req,res)=>{
  try{
    res.render('create',{
    })
  }catch(err){
    console.log(err)
    res.render('error/500')
  }
})


//add invoice to database
// post /create
router.post('/create',async(req,res)=>{
  try{
console.log(req.body)
    const new_invoice= await new Invoice(req.body)

    new_invoice.save().then(()=>{
      console.log("success")
    })


    // res.render('create',{
    // })
  }catch(err){
    console.log(err)
  //   res.render('error/500')
   }
})

//search for invoice
// post /search
router.post('/search',async(req,res)=>{
  try{
console.log(req.body)
    const invoice_list= await Invoice.find({email:req.body.email})
    console.log(invoice_list)


    // res.render('create',{
    // })
  }catch(err){
    console.log(err)
  //   res.render('error/500')
   }
})

module.exports=router
