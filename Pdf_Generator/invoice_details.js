'use strict'
const InvoiceGenerator = require('./pdf_generator');
const invoiceData = async (invoice,material) =>
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
            name: invoice.name,
            address: invoice.address,
        },
        items: items,
        invoiceId: invoice.invoiceId,
        dueDate: invoice.dueDate,
        hours: invoice.product.hours,
        charges: invoice.product.charges,
        labours: invoice.product.labour,
        labourCharge:invoice.product.charges*invoice.product.hours*invoice.product.labour,
        deliveryCharge: invoice.product.delivery_charge,
        taxes: invoice.product.tax,
        status: invoice.status,
        total: material_price+parseInt(invoice.product.charges*invoice.product.hours*invoice.product.labour)+parseInt(invoice.product.delivery_charge)+parseInt( invoice.product.tax)
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
