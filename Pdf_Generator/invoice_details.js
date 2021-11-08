'use strict'
const InvoiceGenerator = require('./pdf_generator');
const invoiceData = async (req,material) =>
{
  try
  {
   const items = [];
   var list =  await material;
   console.log(list);
   var material_price = 0;
   list.forEach(function(element){
   items.push({
     description: element.productname,
     quantity: element.quantity,
     price:element.price,
     total: element.quantity*element.price,
   });
     material_price = parseInt(material_price) +  parseInt(element.quantity * element.price);
     console.log(material_price)
 });
     const data =
     {
        address:
        {
            name: req.body.name,
            address: req.body.address,
        },
        items: items,
        invoiceId: req.body.invoiceId,
        dueDate: req.body.dueDate,
        hours: req.body.hours,
        charges: req.body.charges,
        labours: req.body.labour,
        labourCharge:req.body.charges*req.body.hours*req.body.labour,
        deliveryCharge: req.body.delivery_charge,
        taxes: req.body.tax,
        status: req.body.status,
        total: material_price+parseInt(req.body.charges*req.body.hours*req.body.labour)+parseInt(req.body.delivery_charge)+parseInt( req.body.tax)
  };
console.log(data.total)
  const ig = new InvoiceGenerator(data);
  ig.generate()
}
catch(e)
{
  //console.log(e);
  console.log("Could not make invoiceData");
}
}

module.exports = invoiceData
