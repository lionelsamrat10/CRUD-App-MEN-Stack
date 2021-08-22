const express = require('express');
const app = express();
const router = express.Router();
const port = 9000;
const Alien = require('../Model/alien')
// Get all Aliens
// READ
router.get('/', async(req, res) => {
    try{
        // Fetch the Data from the DB
        const aliens = await Alien.find();
        res.json(aliens);
    } catch(err) {
        res.send('Error ' + err);
    }
});

// Get an alien by its id
router.get('/:id', async(req, res) => {
    try{
        // Fetch the Data from the DB
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch(err) {
        res.send('Error ' + err);
    }
})

// CREATE
// Create a new Alien
// Save an alien data into the DB
router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        // Save to DB
        const alienData = await alien.save();
        res.json(alienData);
    } catch(err) {
        res.send('Error ' + err);
    }
})

// UPDATE
// Update an Alien
// Using Patch Request
router.patch('/:id', async(req, res) => {
    try{
        // update the User by id
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const alienUpdated = await alien.save();
        res.json(alienUpdated);
    } catch(err) {
        res.send('Error ' + err);
    }
});

// DELETE
// Delete an Alien by id
router.delete('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        const alienDeleted = await alien.remove(); // Deletes the alien from DB
        //res.json(alienDeleted);
    } catch(err) {
        res.send('Error ' + err);
    }
})
module.exports = router;