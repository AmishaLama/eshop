const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  phoneNumber: Number,
  email: String,
  password: String,
  address: String,
  age: Number,
});
const users = mongoose.model('User', userSchema);

module.exports = users;
