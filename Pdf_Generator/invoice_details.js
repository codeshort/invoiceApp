'use strict'
const InvoiceGenerator = require('./pdf_generator');
const invoiceData = async (req) =>
{
  try
  {
   const items = [];
   var list =  await req.body.product.material;
   console.log(list);
   var material_price = 0;
   list.forEach(function(element){
   items.push({
     description: element.productname,
     quantity: element.quantity,
     price:element.price,
     total: element.quantity*element.price,
   });
    material_price = material_price+(element.quantity*element.price);
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
        hours: req.body.product.hours,
        charges: req.body.product.charges,
        labours: req.body.product.labour,
        labourCharge:req.body.product.charges*req.body.product.hours*req.body.product.labour,
        deliveryCharge: req.body.product.delivery_charge,
        taxes: req.body.product.tax,
        status: req.body.status,
        total: material_price+(req.body.product.charges*req.body.product.hours*req.body.product.labour)+(req.body.product.delivery_charge)+( req.body.product.tax)
  };

  const ig = new InvoiceGenerator(data);
  ig.generate()
}
catch(e)
{
  console.log(e);
  console.log("Could not make invoiceData");
}
}

module.exports = invoiceData
