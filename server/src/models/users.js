const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String, // String is shorthand for {type: String}
  email: String,
  address: String,
  phoneNumber: Number,
  password: String,
  confirmPassword: String,
  cartLists:Array
 
});
const users = mongoose.model('Users', userSchema);

module.exports = users;
