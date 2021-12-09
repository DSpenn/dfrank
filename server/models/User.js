const {
  Schema,
  model,
} = require('mongoose');
const bcrypt = require('bcrypt');

// const Character = require('./Character');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  test: {
    type: Map,
    of: [Schema.Types.ObjectId],
  },
}, {
  toJSON: {
    virtuals: true,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

/*

  thing: {
    type: Map,
    of: new Schema({
      handle: String,
      fights: {
        type: ObjectId,
        ref: 'Fight'
      }
    })
  }





chars: [{
  type: Schema.Types.ObjectId,
  ref: 'Character',
}], */
