const express = require('express')
const path = require('path');
const auth = require("../middleware/auth")
const multer  = require('multer')
const dogController = require("../Controllers/dogController");


///////////////////////////////////////////IMAGE UPLOAD CONFIG////////////////////////////////////////////////////////
const multerConfig = multer.diskStorage({
    destination: (req,file,callback) => {                         //Callback is same like calling next() and takes 2 arg null and destination folder
        callback(null, path.join(__dirname, '../public'))                                  
    }, 
    filename: (req,file,callback) => {
        const ext = file.mimetype.split('/')[1]                           //we get the extension from the file mimetype and use plain js to split and get the type
        callback(null, `image-${Date.now()}.${ext}`)                                        //to create a unique name
    }                        
})

const isImage = (req,file,callback) => {                        //To check if image is only uploaded nothing else
    if(file.mimetype.startsWith('image')){
        callback(null, true)
    }else{
        callback(new Error('Only image is allowed...'))
    }
}
const upload = multer({
    // dest: './public'
    storage: multerConfig,
    fileFilter: isImage,
})
const uploadimage = upload.single('photo');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();
router.route('/')
    .get(auth,dogController.getDogs)
    .post(uploadimage,dogController.uploadDog) 

module.exports = router