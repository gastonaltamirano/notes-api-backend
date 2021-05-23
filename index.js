const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

let notes = [
      {
        "content": "Gaston1",
        "date": "2020-01-10T17:30:31:098Z",
        "important": false,
        "id": 1
      },
      {
        "content": "Gaston3",
        "date": "2020-01-10T17:30:31:098Z",
        "important": true,
        "id": 2
      },
      {
        "id": 3,
        "content": "Gaston2",
        "date": "2020-01-10T17:30:31:098Z",
        "important": true
      }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1>')
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    if(note) return res.json(note)
    res.status(404).end();
});

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);

    res.status(204).end();
});

app.post('/api/notes', (req, res) => {
    const body = req.body;
    if(!body.content) {
        return res.status(400).json({
            error: 'content is missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    notes = notes.concat(note);
    res.json(note);
})

const generateId = () => {
    constmaxId = notes.length < 0
    ? Math.max(...notes.map(n => n.id))
    : 0;

    return maxId + 1;
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint);

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server running on port ${port}`);