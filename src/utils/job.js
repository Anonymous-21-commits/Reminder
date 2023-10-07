const cron = require("node-cron");
const sender = require("../config/email_config");
const MailService = require("../services/email_service");
const schedule = () => {
  cron.schedule("* * * * *", async () => {
    const service = new MailService();
    const pendingMails = await service.fetchPendingEmails();
    pendingMails.forEach((mail) => {
      sender.sendMail({
        to: mail.recipientMail,
        subject: mail.subject,
        text: mail.content,
      },async(err,data)=>{
          if(err) console.log(err);
          else{
            await new MailService().updateMail(mail.id,{status:'SUCCESS'});
          }
      });
    });
  });
};

module.exports = schedule;
