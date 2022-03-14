const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

const {notes} = require('./db/db.json');

// const fs = require('fs');


app.use(express.static('public'));

// display index.html data
app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
});
    
//display notes.html data
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});