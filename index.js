const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP_URL }));


const CepRouter = require("./controllers/cep.router");
app.use("/cep", CepRouter);

app.listen(Number(process.env.PORT), () =>{
    console.log('Server up at port: ', process.env.PORT);
})