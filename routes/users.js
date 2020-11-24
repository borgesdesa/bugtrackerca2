const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

//Get all users
router.get('/', async (req, res) => {
    try{
        const users = await Users.find();
        res.json(users);
    }
    catch(err){
        res.json({message: err});
    }
});

//Get one user
router.get('/:email', async (req, res) => {
    try{
        const users = await Users.findOne({ email: req.params.email });
        res.json(users);
    }
    catch (err) {
        res.json({message: err});
    }
});

//Submit a user
router.post('/', async (req, res, next) => {
    const users = new Users({
        name: req.body.name,
        email: req.body.email,
        usertype: req.body.usertype
    });

var query = req.body.email;
Users.findOne({email:query}, function(err, users){
    if (err) console.log(err);
        console.log(err);
        if (users) {
            console.log("User already exists.");
            } 
        else {
            var users = new Users(req.body);
            users.save(function(err, users) {
                if(err) console.log(err);
                console.log("New user created succesfully");
                
            });
        }
    });


    try{
        const savedUsers = await users.save()
        res.json(savedUsers);
    }
    catch(err) {
        res.json({message: err});
    }
});
module.exports = router;