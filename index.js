const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

const CepRouter = require("./controllers/cep.router");
app.use("/cep", CepRouter);

app.listen(Number(process.env.PORT), () =>{
    console.log('Server up at port: ', process.env.PORT);
})