const mongoose = require('mongoose');
const connection = require('.');

const commentSchema = new mongoose.Schema({
  user: String,
  prodRating: Number,
  yesRating: Number,
  noRating: Number,
  date: Date,
  body: String,
  verified: Boolean,
  recommend: Boolean,
  size: Number,
  width: Number,
  comfort: Number,
  quality: Number,
  response: String,
  prodId: Number,
  header: String
}, 
  {
    timestamps: false
  }
)

const productInfoSchema = new mongoose.Schema({
  prodId: Number,
  avgRating: Number,
  numRatings: Number,
  recommendCount: Number,
  num1star: Number,
  num2star: Number,
  num3star: Number,
  num4star: Number,
  num5star: Number,
  avgSize: Number,
  avgWidth: Number,
  avgComfort: Number,
  avgQuality: Number
},
  {
    timestamps: false
  }
)

// TIMING MIDDLEWARE
commentSchema.pre('find', function() {
  this._startTime = Date.now();
});

commentSchema.post('find', function() {
  if (this._startTime != null) {
    console.log('Runtime in MS: ', Date.now() - this._startTime);
  }
});

const Comments = mongoose.model('comments', commentSchema);
const ProductInfo = mongoose.model('products', productInfoSchema);

module.exports = { Comments, ProductInfo };

