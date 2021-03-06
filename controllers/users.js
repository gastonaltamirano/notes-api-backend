const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/User');

usersRouter.post('/', async (req, res) => {
  const { body } = req;
  const { username, name, password} = body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash
  });

  const savedUser = await user.save();

  res.json(savedUser);
});

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({}).populate('notes', { content: 1, date: 1 });

  res.json(users.map(u => u.toJSON()));
});

module.exports = usersRouter;