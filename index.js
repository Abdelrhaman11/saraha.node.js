import dotenv from "dotenv"
dotenv.config();
import bootstrap from "./src/index.router.js";
import express from "express";
const app=express();
const port =5001;



bootstrap(app,express);







app.listen(port,(req,res,next)=>{
    console.log(`Example app listening on port ${port}!`);
})