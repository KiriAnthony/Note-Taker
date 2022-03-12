const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});