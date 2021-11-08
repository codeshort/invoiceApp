const express= require('express')
const router= express.Router()
const Invoice=require('../models/invoice.js')
const path = require('path')
router.get('/',async(req,res) =>{
  try{
    const params ={};
    var x =0;
    var y =0;
    var z = 0;
  var query1 = Invoice.find({'status': 'pending' });
  //console.log(query1)
await query1.countDocuments().then((count)=>{
  x = count;
});
var query2 = Invoice.find({'status': 'outstanding' }).countDocuments();
await query2.countDocuments().then((count)=>{
  y = count;
});
var query3 = Invoice.find({'status': 'paid' });
await query3.countDocuments().then((count)=>{
  z = count;
});
console.log(x,y,z)
    params.x = x;
    params.y = y;
    params.z = z;
console.log(params)
  return res.render('pie',{params : JSON.stringify(params)});
  }
  catch(e){
    console.log(e);
  }

});

module.exports = router;
