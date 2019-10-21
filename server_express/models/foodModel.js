const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  THC: {
    type: Number,
    required: true
  },
  THC1: {
    type: Number,
    required: true
  },
  CBD: {
    type: Number,
    required: true
  },
  CBD1: {
    type: Number,
    required: true
  },
  heavyMetals: {
    type: Number,
    required: true
  },
  heavyMetals1: {
    type: Number,
    required: true
  },
  avgRating: {
    type: Number,
     set: val => Math.round(val * 10 )/10
  },
  numberRating: {
    type: Number,
  
  },
  image: {
    type: String,
    
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

productSchema.virtual("reviews",{
  ref:"Review",
  foreignField:"product",
  localField:"_id"
})

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
