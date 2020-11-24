const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');

//Get all projects
router.get('/', async (req, res) => {
    try{
        const projects = await Projects.find();
        res.json(projects);
    }catch(err){
        res.json({message: err});
    }
});

//Submit a project
router.post('/', async (req, res, next) => {
    const projects = new Projects({
        slug: req.body.slug.toUpperCase(),
        name: req.body.name,
        description: req.body.description,
    });

    var query = req.body.slug;
    Projects.findOne({slug:query}, function(err, projects){
        if (err) console.log(err);
            console.log(err);
            if (projects) {
                console.log("Project already exists.");
                } 
            else {
                var projects = new Projects(req.body);
                projects.save(function(err, projects) {
                    if(err) console.log(err);
                    console.log("New project created succesfully");
                    
                });
            }
        });

    try{
        const savedProjects = await projects.save()
        res.json(savedProjects);
    } catch(err) {
        res.json({message: err});
    }
});

//Get one project
router.get('/:slug', async (req, res) => {
    try{
        const projects = await Projects.findOne({ slug: req.params.slug });
        res.json(projects);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;