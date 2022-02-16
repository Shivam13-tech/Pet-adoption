const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json({extended: false}))
app.use(cors());



mongoose.connect('mongodb+srv://PetAdoption:PetAdoption123@pet-adoption.xolv3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(function(){
    console.log('AtlasDB Connected...')
}).catch(function(err){
    console.log(err);
})

const petSchema = {
    name: String,
    breed: String,
    about: String,
    email: String,
    location: String,
}

const Pet = mongoose.model("Pet", petSchema);


app.post('/api/v1/pet', function(req,res){
    console.log(req.body);
    Pet.create({
        name: req.body.name,
        breed: req.body.breed,
        about: req.body.about,
        email: req.body.email,
        location: req.body.location
    }).then(function(result){
        res.status(200).json({
            status: 'Success',
            data: {
                result
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
});

app.get('/api/v1/pet', function(req,res){
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
});


PORT=8000
app.listen(PORT,function(req,res){
    console.log(`Server started on ${PORT}`);
})