const express=require('express');
const {PORT}=require('./config/serverConfig');
const bodyparser=require('body-parser');
const setUpServer=()=>{
    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log('server started on PORT',PORT);
    })
}
setUpServer();