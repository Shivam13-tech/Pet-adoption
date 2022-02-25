const express = require('express')
const cors = require('cors');

const dog = require("./Routes/dogRoutes");
const createuser = require("./Routes/createRoutes");
const loginuser = require("./Routes/loginRoutes");

const app = express();

app.use(express.json({extended: false}))           //Init Middleware for incoming data
app.use(cors());

app.use('/api/v1/pet',dog)
app.use('/api/v1/user',createuser)    
app.use('/api/v1/userlogin',loginuser)    
    
module.exports = app;
