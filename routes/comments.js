const express = require('express');
const router = express.Router();
const Comments = require('../models/Comments');

//Get all comments
router.get('/', async (req, res) => {
    try{
        const comments = await Comments.find();
        res.json(comments);
    }catch(err){
        res.json({message: err});
    }
});

//Submit a comment
router.post('/', async (req, res) => {
    const comments = new Comments({
        text: req.body.text,
        author: req.body.author,
        issuenumber: req.body.issuenumber
    });
    try{
        const savedComments = await comments.save()
        res.json(savedComments);
    } catch(err) {
        res.json({message: err});
    }
});

//Get one comment
router.get('/:commentsId', async (req, res) => {
    try{
        const comments = await Comments.findById(req.params.commentsId);
        res.json(comments);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;