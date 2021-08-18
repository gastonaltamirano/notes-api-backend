const Note = require('../models/Note.js');
const User = require('../models/User.js');
const notesRouter = require('express').Router();
const getTokenFrom = require('../utils/authorization.js');
const jwt = require('jsonwebtoken');

notesRouter.get('/', async (req, res) => {

  const notes = await Note
    .find({}).populate('user', { username: 1, name: 1 })
  res.json(notes.map(note => note.toJSON()))

});

notesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);
  if (note) {
    res.json(note.toJSON());
  } else {
    res.status(404).end();
  }

});

notesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await Note.findByIdAndRemove(id);

  res.status(204).end();

});

notesRouter.post('/', async (req, res) => {

  const { body } = req;
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if(!token || !decodedToken.id) {
    return res.status(401).json({error: 'token missing or invalid'});
  }

  const user = await User.findById(decodedToken.id);

  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    date: new Date(),
    user: user._id
  });

  const savedNote = await note.save();
  user.notes = user.notes.concat(savedNote._id);
  await user.save();

  res.json(savedNote.toJSON());

});

notesRouter.put('/:id', (req, res, next) => {

  const { id, content, important } = req.body;

  const note = {
    content,
    important
  };

  Note.findByIdAndUpdate(id, note, { new: true })
    .then(updatedNote => {
      res.json(updatedNote);
    })
    .catch(err => next(err));
});

module.exports = notesRouter;