const express=require('express');
const {PORT}=require('./config/serverConfig');
const bodyparser=require('body-parser');
const sendBasicMail = require('./services/email_service');

const setUpServer=()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log('server started on PORT',PORT);
        /*sendBasicEmail('specify from','specify to for which gmail acc you set up the app password',
        'subject','body')
        */
    })
}
setUpServer();
