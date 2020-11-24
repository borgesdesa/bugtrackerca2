const mongoose = require('mongoose');
Schema = mongoose.Schema;

const commentsSchema = mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    issuenumber: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('comments', commentsSchema);