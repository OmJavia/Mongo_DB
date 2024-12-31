const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  age: Number,
  password: String,
  address: [
    {
      address: String,
      city: String,
      state: String,
      pincode: Number
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User ; 
