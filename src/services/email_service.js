const sender=require('../config/email_config');
const sendBasicMail=(mailFrom,mailTo,mailSubject,mailBody)=>{
   sender.sendMail({
    from:mailFrom,
    to:mailTo,
    text:mailBody,
    subject:mailSubject
   })
}
module.exports=sendBasicMail;