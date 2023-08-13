const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productName: String, // String is shorthand for {type: String}
    productPrice: String,
    category: String,
    productDescription: String
  });

  const Products = mongoose.model('Products', productSchema);
  module.exports = Products