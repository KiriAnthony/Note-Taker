const express = require('express');
const app = express();
const path = require('path');

const {notes} = require('./db/db.json');


app.use(express.static('public'));


app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
    
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
        
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});