    const express = require("express");

    const Men = require("../model/men.model");
    const router = express.Router();


    router.post("", async(req, res) => {
        try{
         const men = await Men.create(req.body);
         return res.send(men);
        }catch(err){
         return res.status(500).send(err.message);
        }
    });

    router.get("", async(req,res) => {
        try{
            let men;
            if(req.query.price){
                men  = await Men.find({price: {$lt: req.query.price}}).sort({price:1}).lean().exec();
            }else{
                men = await Men.find().lean().exec();
            }
             
          return res.send(men);

          
        }catch(err){
            return res.status(500).send(err.message);
        }
    });

    router.patch("/:id", async(req,res) =>{
        try{
            const men = await Men.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
            return res.status(201).send(men);
          }catch(err){
              return res.status(500).send(err.message);
          }
    })



    module.exports = router; 



     