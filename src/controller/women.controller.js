const express = require("express");

    const Women = require("../model/women.model");
    const router = express.Router();


    router.post("", async(req, res) => {
        try{
         const women = await Women.create(req.body);
         return res.send(women);
        }catch(err){
         return res.status(500).send(err.message);
        }
    });

    router.get("", async(req,res) => {
        try{
          const women = await Women.find().lean().exec();
          return res.send(women);
        }catch(err){
            return res.status(500).send(err.message);
        }
    });

    router.patch("/:id", async(req,res) =>{
        try{
            const women = await Women.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
            return res.status(201).send(women);
          }catch(err){
              return res.status(500).send(err.message);
          }
    })



    module.exports = router;