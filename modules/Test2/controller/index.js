
// MARKET CONTROLLER

const e = require("express");
const { method, get } = require("lodash");



const methods = {};

methods.test  = async (req,res)=>{

    try{
 

        let getRecords = await connection.getRepository('VoucherFims2')                        
                        .find({
                            INFO_FARM_REG: '03',                          
                            take: 5000000,
                        });                     
            
        
                    
        return res.send(getRecords);        
    }catch(error){
        console.warn(error);
        return res.send({status:false,message:error});
    }
}






module.exports = methods;