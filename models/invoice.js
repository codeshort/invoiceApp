const mongoose =require('mongoose');
const { isEmail }=require('validator');
const  Schema  = mongoose.Schema;

require('mongoose-double')(mongoose);

  const invoice = new Schema({
    name:{
      type: String,
      required: true,
      trim:true,
    },
    email:{
      type: String,
      validate: [ isEmail, 'invalid email'],
      trim:true,
      required: true
    },
    productName:{
      type: String,
    
    },
    address: {
      type:String
    },
    dueDate:{
      type: String,
      trim:true,
      required: true
    },
    invoiceId:{
      type: String,
      trim:true,
      required: true
    },
    product:{
      hours:{type:Schema.Types.Double,
    },
    charges:{type:Schema.Types.Double,
    },
    labour:{type:Schema.Types.Double,
    },
    material:[{productname:{type:String},price:{type:Schema.Types.Double},quantity:{type:Number}
    }],
    tax:{type:Schema.Types.Double},
    delivery_charge:{type:Schema.Types.Double}
  },
    status:{
      type: String,
      trim:true,
      required: true
    }
  });
  const Invoice = mongoose.model('Invoice',invoice)
  module.exports = Invoice;
