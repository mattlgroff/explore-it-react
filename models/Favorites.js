const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const findOrCreate = require("mongoose-findorcreate");

const FavoritesSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  list: { type: Array, unique: true }
});

// Pre-save of user to database, hash password if password is modified or new
FavoritesSchema.pre('save', function(next) {  
  const user = this,
        SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
FavoritesSchema.methods.comparePassword = function(candidatePassword, cb) {  
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
}


FavoritesSchema.plugin(findOrCreate);

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
