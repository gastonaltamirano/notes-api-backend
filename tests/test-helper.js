const Note = require('../models/Note.js');
const User = require('../models/User.js');

const initialNotes = [
  {
    content: 'Gasssti',
    date: new Date(),
    important: false
  },
  {
    content: 'Gasssti 2',
    date: new Date(),
    important: true
  }
];

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon', date: new Date() });
  await note.save();
  await note.remove();

  return note._id.toString()
};

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map(note => note.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map(u => u.toJSON());
}

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb
};