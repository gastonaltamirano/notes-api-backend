const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = Schema({
  username: {
    type: String,
    unique: true,
    minlength: [4, 'Minimum username length 4 characters'],
    match: [
      /^[^$%&|<>#,:;]*([._\-A-Z0-9]+)$/i,
      'username shouldn`t contain "^ $ % & | < > # , : ;"'
      ]
  },
  name: String,
  passwordHash: {
    type: String,
    match: [/^(?=.*\d)(?=.*[a-z])./i, 'Please fill a valid password'],
    minlength: [8, 'Minimum password length 8 characters']
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }
  ]
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash
  }
});

userSchema.plugin(uniqueValidator);

const User = model('User', userSchema);

module.exports = User;