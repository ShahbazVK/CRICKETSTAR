const mongoose = require('mongoose')

const credentialsSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // lowercase: true
    },
    password: {
        type: String,
        // unique: true,
        required: true
    }
});
module.exports = mongoose.model("credentials", credentialsSchema)
