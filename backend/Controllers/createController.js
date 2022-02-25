const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../Models/userModel");


exports.createUser = async function(req,res){
    const {name,email,password} = req.body;
    const pass = await bcrypt.hash(password,saltRounds)             //Hash the password we get from input

    const user = await User.findOne({email})
    if(user){
       return (
           res.status(400).json({
               status: 'Failed',
               message: 'User already exist'
           })
       )
    }
        User.create({
            name: name,
            email: email,
            password: pass,
        }).then(function(result){
            // console.log(result.id)
            const payload = {
                user : {
                    id: result.id                                      
                }
            }
            // console.log(payload)
            jwt.sign(                                     //Takes 3 things 1.payload 2.secret 3. extra options
                payload,   
                "mysecrettoken",
                { expiresIn: 36000 },
                function(err,token){                     //A call back fnc if err give error else we send the user created and the token
                    if(err){
                        console.log(err);
                    }
                    res.status(200).json({
                        status: 'Success',
                        data: {
                            result,
                            token
                        },
                    })
                })
        }).catch(function(err){
            res.status(404).json({
                status: 'Failed',
                data: {
                    err
                }
            })
        })
    };