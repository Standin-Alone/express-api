
// MARKET CONTROLLER

const e = require("express");
const { method, get } = require("lodash");



const methods = {};

methods.login  = async (req,res)=>{

    try{

        let username  =req.body.username;
        let password  =req.body.password;

        
        let generateToken = jwt.sign({ foo: 'bar' }, uuid(),{ expiresIn: "2h"});

        

        console.warn(generateToken);
                    
        let checkUsername = await connection.createQueryBuilder().select()       
                        .from('USERS','fa')
                        .where(`username = :username`,{username:username})                        
                        .getRawOne();


        
        
        if(checkUsername){
            let decryptPassword = await bcrypt.compare(password, checkUsername.PASSWORD);


            if(decryptPassword){
                
                let insertAccessToken  =  await connection.createQueryBuilder()
                            .from('USERS')
                            .update({
                                ACCESS_TOKEN:generateToken
                            })
                            .where({
                                USER_ID: checkUsername.USER_ID
                            }).execute();

                return res.send({status:true,message:'Succesfully logged in.',user:checkUsername,accessToken:generateToken});
            }else{
                return res.send({status:false,message:'Failed to login'});
            }

            
        }else{
            return res.send({status:false,message:'User does not exist'});
        }
        
    }catch(error){
        console.warn(error);
        return res.send({status:false,message:error});
    }
}




methods.login  = async (req,res)=>{

    try{
        
        
        let email = req.params.email;

        

        let checkUsername =  await connection.createQueryBuilder().select()       
                                    .from('users','fa')
                                    .where(`username = :username`,{username:email})                        
                                    .getRawOne();

        console.warn(checkUsername)

        return res.send({
            data: checkUsername
        })
        
    }catch(error){
        console.warn(error);
        return res.send({status:false,message:error});
    }
}



module.exports = methods;