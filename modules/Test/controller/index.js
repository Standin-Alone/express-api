
// MARKET CONTROLLER

const e = require("express");
const { method, get } = require("lodash");



const methods = {};

methods.test  = async (req,res)=>{

    try{
        
        return res.render('views/index.ejs');
    }catch(error){
        console.warn(error);
        return res.send({status:false,message:error});
    }
}






module.exports = methods;