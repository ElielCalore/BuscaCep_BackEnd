const router = require("express").Router();
const {request, response} = require("express");
const axios = require("axios");

router.get("/read/:id", async (request, response) => {
    const {id} = request.params;
    try{
        const readCep = await axios.get(`https://viacep.com.br/ws/${id}/json/` );
        return response.status(201).json(readCep.data);
    }catch(error){
        return response.status(500).json({error: error.message})
    }
})

module.exports = router