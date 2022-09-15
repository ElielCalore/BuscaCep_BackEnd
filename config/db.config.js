const mongoose = require("mongoose");
require('dotenv').config();

async function connect(){
    try{
        const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB:', dbConnect.connection.name);
    }catch(error){
        console.error("Db connection error", error);
    }
}

module.exports = connect;