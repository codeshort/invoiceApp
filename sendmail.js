const mailtemp=require('./emailTemplate.js');
const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_KEY)

const fs = require("fs");

const sendmail =async (email, name,link) => {
try{
  console.log(link)
    sgMail.send({
        to: email,
        from: 'team.minato.hackathon@gmail.com',
        subject: `Invoice reagarding purchase`,
        html:mailtemp(name,link)

    }).then(()=>{'Mail sent'}).catch((e)=>{console.log(e)})
    //console.log("22222",email,pathToAttachment,attachment,"cxc")

  }catch(e){
    console.log("error block....")
    console.log(e)
  }
}
module.exports = sendmail
