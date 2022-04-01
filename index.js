const express = require("express");

const Connect = require("./src/configs/db");

const menController = require("./src/controller/men.controller");
const womenController = require("./src/controller/women.controller");

const app = express();

app.use(express.json());
app.use("/men", menController);
app.use("/women", womenController);

app.listen(process.env.PORT || 3444, async()=>{
    try{
       await Connect ();
        console.log("listening on port 3444")

    }catch(err){
        console.log(err.message)
    }
});


