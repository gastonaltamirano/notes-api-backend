const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app.js');
const { initialNotes, nonExistingId, notesInDb } = require('./test-helper.js');
const api = supertest(app);
const Note = require('../models/Note.js');

describe('when there is initially some notes saved', () => {
  beforeEach(async () => {
    await Note.deleteMany({});

    //paralell
    /* const notesObjects = initialNotes.map(note => new Note(note));
    const promises = notesObjects.map(note => note.save());
    await Promise.all(promises); */

    //sequential
    /* for(const note of initialNotes) {
      const noteObject = new Note(note);
      await noteObject.save();
    } */
    await Note.insertMany(initialNotes);
  });

  test('notes are returned as json', async () => {
    await api
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all notes are returned', async () => {
    const res = await api.get('/api/notes');

    expect(res.body).toHaveLength(initialNotes.length);
  });
  
  test('a specific note is within the returned notes', async () => {
    const res = await api.get('/api/notes');

    const contents = res.body.map(r => r.content);

    expect(contents).toContain('Gasssti 2')
  });

  describe('viewing a specific note', () => {

    test('succeds with a valid id', async () => {
      const notesAtStart = await notesInDb();

      const noteToView = notesAtStart[0];

      const resultNote = await api
        .get(`/api/notes/${noteToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      const processedNoteToView = JSON.parse(JSON.stringify(noteToView));

      expect(resultNote.body).toEqual(processedNoteToView);
    });

    test('fails with statuscode 404 if note does not exist', async () => {
      const validNonexistingId = await nonExistingId();

      console.log(validNonexistingId);

      await api
        .get(`/api/notes/${validNonexistingId}`)
        .expect(404);
    })

    test('fails with statuscode 404 if id is invalid', async () => {
      const invalidId = '12345678910111213141516'

      await api
        .get(`/api/notes${invalidId}`)
        .expect(404);
    })
  })

  describe('addition of a new note', () => {
    test('succeeds with valid data', async () => {
      const newNote = {
        content: 'Gasssti 123',
        important: true
      }

      await api
        .post('/api/notes')
        .send(newNote)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      const notesAtEnd = await notesInDb();
      expect(notesAtEnd).toHaveLength(initialNotes.length + 1);

      const contents = notesAtEnd.map(n => n.content)
      expect(contents).toContain('Gasssti 123');
    })

    test('fails with status code 400 if data invalid', async () => {
      const newNote = {
        important: true
      };

      await api
        .post('/api/notes')
        .send(newNote)
        .expect(400);

      const notesAtEnd = await notesInDb();

      expect(notesAtEnd).toHaveLength(initialNotes.length);
    })
  })

  describe('deletion of a note', () => {
    test('succeds with status code 204 if id is valid', async () => {
      const notesAtStart = await notesInDb();
      const noteToDelete = notesAtStart[0];

      await api
        .delete(`/api/notes/${noteToDelete.id}`)
        .expect(204);

      const notesAtEnd = await notesInDb();

      expect(notesAtEnd).toHaveLength(initialNotes.length - 1);

      const contents = notesAtEnd.map(r => r.content);

      expect(contents).not.toContain(noteToDelete.content);
    })
  })

  afterAll(() => {
    mongoose.connection.close()
  });
})
