// const sgMail = require('@sendgrid/mail')


// sgMail.setApiKey(process.env.SENDGRID_KEY)

// const fs = require("fs");

// const sendmail =async(email, name,invoiceId) => {
// try{
//   const pathToAttachment = `${__dirname}/Invoice${invoiceId}.pdf`;
//   console.log('Above line worked')
//   var attachment =  fs.readFileSync(pathToAttachment, 'base64').toString();
//   //console.log('read file worked',attachment, pathToAttachment)
//     sgMail.send({
//         to: email,
//         from: 'team.minato.hackathon@gmail.com',
//         subject: `Invoice reagarding purchase`,
//         text: `Hi , ${name} the invoice for your purchase has been attached below.,`,
//         attachments: [
//          {
//            content: attachment,
//            filename: "invoice.pdf",
//            type: "application/pdf",
//            disposition: "attachment",
//          }
//        ]
//     }).then(() => {'Mail sent'}).catch((e) => {//console.log(e)}
//       console.log('error')
//     })
//    // console.log("22222",email,pathToAttachment,attachment,"cxc")

//   }catch(e){
//     console.log("error block....")
//     //console.log(e)
//   }
// }
// module.exports = sendmail

const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_KEY)

const fs = require("fs");

const sendmail =async (email, name,invoiceId) => {
try{
  const pathToAttachment =  `${__dirname}/Invoice${invoiceId}.pdf`;
  var attachment =  fs.readFileSync(pathToAttachment, 'base64').toString();
  console.log('worked')
    sgMail.send({
        to: email,
        from: 'team.minato.hackathon@gmail.com',
        subject: `Invoice reagarding purchase`,
        text: `Hi , ${name} the invoice for your purchase has been attached below.,`,
        attachments: [
         {
           content: attachment,
           filename: "invoice.pdf",
           type: "application/pdf",
           disposition: "attachment",
         }
       ]
    }).then(()=>{'Mail sent'}).catch((e)=>{console.log(e)})
    //console.log("22222",email,pathToAttachment,attachment,"cxc")

  }catch(e){
    console.log("error block....")
    console.log(e)
  }
}
module.exports = sendmail
