const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    reason: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
});

module.exports = mongoose.model('Contact', contactSchema);