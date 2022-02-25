const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('x-auth-token');   //The token which we will send from the frontend
    // console.log(token);           
    if(!token){
       return res.status(401).json({
           data: {
               msg: 'Not authenticated, NO TOKEN PRESENT'
           }
       })
    }
    try {
      const decoded = jwt.verify(token, "mysecrettoken");
        // console.log(decoded);
        req.user = decoded.user;           //req is the middleware and user is the variable we create that gets the id      //decoded.user is just the id from the token payload
        next()
    } catch(err){
        res.status(401).json({
            data: {
                msg: 'Token is not valid'
            }
        })
    }
}