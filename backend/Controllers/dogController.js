const path = require('path');
const fs = require('fs');
const Pet = require("../Models/petModel");

exports.uploadDog = function(req,res){
    // console.log(req.body, req.file);
    let obj = {
        img: {
            data: fs.readFileSync(path.join(__dirname, '../public/' + req.file.filename)),
            contentType: 'image/png'
        },
        name: req.body.Name,
        breed: req.body.Breed,
        about: req.body.About,
        email: req.body.Email,
        location: req.body.Location,
    }
    Pet.create(obj).then(function(response){
        res.status(200).json({
            status: 'Success',
            data: {
                response
            }
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

exports.getDogs = function(req,res){
    Pet.find({})
    .then(function(result){
        res.status(200).json({
            status: 'Success',
            data: {
                result
            }
        })
    }).catch(function(err){
        res.status(404).json({
            data: {
                err
            }
        })
    })
};

