const path = require('path');
const router = require('express').Router();
const {notes} = require('../../db/db.json');

router.get('/notes', (req,res) => {
    //read db.json and return all the saved notes in JSON
    
})

router.post('/notes', (req,res) => {
    //receive the new note and take the data from the request body, save it to db.json
    //return new note to client
})

module.exports = router;