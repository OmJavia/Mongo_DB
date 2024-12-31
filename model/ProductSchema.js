const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  product_name: String, // String is shorthand for {type: String}
  product_price: Number,
  ticket_price: Number,
  ticket_quantity: Number,
  ticket_sold: Number,
  image_path: String,
  draw_date: Date
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product ; 
