const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, // String is shorthand for {type: String}
  phoneNumber: Number,
  email: String,
  password: String,
  location: String,
  age: Number,
 
});
const users = mongoose.model('User', userSchema);

module.exports = users;
