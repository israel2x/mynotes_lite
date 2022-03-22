const Joi = require('joi');
const mongoose  = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength:3,
    },
    category: {
       type:  [ String ]
    },
    favorite: {
        type: Boolean,
        default: false
    },
    scratchpad: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const Note = mongoose.model('Note', noteSchema);

function validateNote(note) {
    const schema = Joi.object({
        text: Joi.string().min(3).required(),
        category: Joi.array(),
        favorite: Joi.boolean(),
        scratchpad: Joi.boolean(),
        created: Joi.date(),
        lastUpdated: Joi.date()
    });

    return schema.validate(note);
}

exports.noteSchema = noteSchema;
exports.Note = Note;
exports.validate = validateNote;
