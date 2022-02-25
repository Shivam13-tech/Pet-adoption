const mongoose = require('mongoose');

const petSchema = {
    name: String,
    breed: String,
    img: {
        data: Buffer,
        contentType: String
    },
    about: String,
    email: String,
    location: String,
}

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;