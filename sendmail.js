const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_KEY)

const fs = require("fs");

const sendmail =async (email, name,invoiceId) => {
try{
  const pathToAttachment =  `${__dirname}/Invoice${invoiceId}.pdf`;
  var attachment =await fs.readFileSync(pathToAttachment,'base64').toString();
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
    }).then(()=>{}).catch((e)=>{console.log(e)})
    console.log("22222",email,pathToAttachment,attachment,"cxc")

  }catch(e){
    console.log("error block....")
    console.log(e)
  }
}
module.exports = sendmail
