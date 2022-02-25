const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../Models/userModel");

exports.userLogin = async function(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return (
            res.status(400).json({
                status: 'Failed',
                message: 'Invalid Credentials'
                })
            )
        }
       const isMatch =  await bcrypt.compare(password, user.password)
       if(!isMatch){
           return (
            res.status(400).json({
                status: 'Failed',
                message: 'Invalid Credentials'
                })
            ) 
       } 
            const payload = {
                user : {
                    id: user.id            // We will look for id from the db and create payload from that                           
                }
            }
            // console.log(payload)
            jwt.sign(                                     //Takes 3 things 1.payload 2.secret 3. extra options
                payload,   
                "mysecrettoken",
                { expiresIn: 3600 },
                function(err,token){                     //A call back fnc if err give error else we send the user created and the token
                    if(err){
                        console.log(err);
                    }
                    res.status(200).json({
                        status: 'Success',
                        data: {
                            token
                        },
                    })
                })
            }