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

router.post('/details',async(req,res)=>{
  try {
    console.log(req.body)
    res.render('details', {
      name: req.body.name,
      email: req.body.email,
      due_date: req.body.due_date,
      product_name: req.body.product_name,
      invoice_id: req.body.invoice_id,
      address: req.body.address,
      cost: req.body.cost,
      status:req.body.status
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
    const new_invoice = await new Invoice({
      name: req.body.name,
      email: req.body.email,
      dueDate: req.body.dueDate,
      status: req.body.status,
      invoiceId: req.body.invoiceId,
      productName: req.body.product_name,
      address:req.body.address
    })
    new_invoice.product.hours = req.body.hours
    new_invoice.product.charges = req.body.charges
    new_invoice.product.labour = req.body.labour

    new_invoice.save().then(()=>{
      console.log("success")
      console.log(new_invoice)
    })
    // res.render('create',{
    // })
    res.render('home')
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
    console.log("fgvhj",invoice_list,"ghj")


     res.render('search',{invoice:invoice_list,searched_mail:req.body.email
     })
  }catch(err){
    console.log(err)
  //   res.render('error/500')
   }
})

//search for invoice
// get /search
router.get('/search',async(req,res)=>{
  try{
     res.render('search')
  }catch(err){
    console.log(err)
  //   res.render('error/500')
   }
})
module.exports=router
