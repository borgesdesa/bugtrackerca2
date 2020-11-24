const express = require('express');
const router = express.Router();
const Issues = require('../models/Issues');

//Get all issues
router.get('/', async (req, res) => {
    try{
        const issue = await Issues.find();
        res.json(issue);
    }catch(err){
        res.json({message: err});
    }
});

//Submit a issue
router.post('/', async (req, res) => {
    const issues = new Issues({
        issuenumber: req.body.issuenumber,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        projectid: req.body.projectid
    });
    try{
        const savedIssues = await issues.save()
        res.json(savedIssues);
    } catch(err) {
        res.json({message: err});
    }
});

//Get one issue
router.get('/:issuesId', async (req, res) => {
    try{
        const issues = await Issues.findById(req.params.issuesId);
        res.json(issues);
    } catch (err) {
        res.json({message: err});
    }
});

//Get all issues for one project 
router.get('/', async (req, res) => {
    try{
        const issues = await Issues.findById(req.params.projectsId);
        res.json(issues);
    } catch (err) {
        res.json({message: err});
    }
});

//Update an issue
router.patch('/:issuesId', async (req, res) => {
    try{
        const updatedIssue = await issues.updateOne(
            {_id: req.params.issuesId}, 
            {$set: {status: req.body.status}
        });
        res.json(updatedIssue);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;