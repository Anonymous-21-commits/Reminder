const mongoose=require('mongoose');
const connect=async()=>{
    await mongoose.connect('mongodb://localhost:27017/Mail_DB');
}
module.exports=connect;