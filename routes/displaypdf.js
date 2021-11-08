const express= require('express')
const router= express.Router()
const Invoice=require('../models/invoice.js')
const fs=require('fs')
const path=require('path')
const dirPath = path.join(__dirname, "/../");


router.get("/invoice/:invoiceId",async (req, res) => {
  const name=`Invoice${req.params.invoiceId}`
 const path= `${__dirname}/../Invoice${req.params.invoiceId}.pdf`;
  if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }

});
module.exports=router
