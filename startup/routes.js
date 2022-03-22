const express = require('express');
const notes = require('../routes/notes');


module.exports = function(app) {
    
    app.use(express.json());
    app.use('/api/notes', notes);

}