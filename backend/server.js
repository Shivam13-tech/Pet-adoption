const app = require("./app");
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

mongoose.connect(process.env.DATABASE).then(function(){
        console.log('AtlasDB Connected...')
    }).catch(function(err){
        console.log(err);
    })

const PORT=process.env.PORT || 5000
app.listen(PORT,function(req,res){
    console.log(`Server started on ${PORT}`);
})
