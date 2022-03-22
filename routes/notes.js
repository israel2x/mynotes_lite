const express = require('express');
const router = express.Router();
const { Note, validate } = require('../models/note');


//get all notes
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

//new note
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let note = new Note({
        text : req.body.text,
        category: [ ...req.body.category ],
        favority: req.body.favority,
        scratchpad: req.body.scratchpad,
        created: req.body.created,
        lastUpdated: req.body.lastUpdated
    });

    note = await note.save();
    res.send(note);
});

//update note
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    const note = await Note.findByIdAndUpdate(req.params.id, {
        text : req.body.text,
        category: [ ...req.body.category ],
        favority: req.body.favority,
        scratchpad: req.body.scratchpad,
        created: req.body.created,
        lastUpdated: req.body.lastUpdated
    }, { new: true });

    if (!note) return res.status(404).send('The note with the given ID was not found.');
  
    res.send(note);
});

//delete note 
router.delete('/:id', async(req, res) => {
    const note = await Note.findByIdAndRemove(req.params.id);
    if (!note) return res.status(404).send('The note with the given ID was not found.');

    res.send(note);
});

module.exports = router;