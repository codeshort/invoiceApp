const express= require('express')
const router= express.Router()
const Invoice=require('../models/invoice.js')

router.post('/',async (req,res) =>{
  console.log(req.body);
 try{
     await Invoice.findOneAndUpdate({invoiceId:req.body.invoiceId},req.body);
     return res.status(200).send('updated successfully');
    }
  catch
  {
    console.log("Operation failed!");
    return res.status(500).send('Could not update');
  }
});

module.exports = router;
