const express = require("express");
const router = express.Router();
const { Note, validate, validateNewNote } = require("../models/note");

//get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(notes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ type: "error", message: error.message });
  }
});

//get note by ID
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    res.send(note);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ type: "error", message: error.message });
  }
});

//new note
router.post("/", async (req, res) => {
  let note = new Note({
    text: req.body.body,
    category: ["NORMAL"],
    created: req.body.lastUpdated,
    lastUpdated: req.body.lastUpdated,
  });

  note = await note.save();
  res.send(note);
});

//update note
router.put("/:id", async (req, res) => {
  //const { error } = validate(req.body);
  //if (error) return res.status(400).send(error.details[0].message);
  console.log("Nota to Update : ", JSON.stringify(req.body));

  const note = await Note.findByIdAndUpdate(req.body._id, {
    text: req.body.text,
    category: ["NORMAL"],
    lastUpdated: req.body.lastUpdated,
  });

  if (!note)
    return res.status(404).send("The note with the given ID was not found.");

  res.send(note);
});

//delete note
router.delete("/:id", async (req, res) => {
  const note = await Note.findByIdAndRemove(req.params.id);
  if (!note)
    return res.status(404).send("The note with the given ID was not found.");

  res.send(note);
});

module.exports = router;
