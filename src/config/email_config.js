const nodemailer=require('nodemailer');
const {EMAIL_ID,PASSWORD}=require('./serverConfig');
const sender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        password:PASSWORD
    }

});
module.exports=sender;