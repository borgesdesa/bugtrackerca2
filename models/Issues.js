const mongoose = require('mongoose');
Schema = mongoose.Schema;

const IssuesSchema = mongoose.Schema({
    issuenumber: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    status: {
        type: String,
        require: true
    },

    projectid: {
        type: String,
        require: true
    }
});



module.exports = mongoose.model('issues', IssuesSchema);