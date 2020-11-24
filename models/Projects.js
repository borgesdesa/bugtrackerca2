const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ProjectsSchema = mongoose.Schema({
    
    slug: {
        type: String,
        require: true
    },
    
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },
});



module.exports = mongoose.model('projects', ProjectsSchema);