var mongoose = require('mongoose');
var Schema = mongoose.Schema;

productSchema = new Schema( {
	name: String,
	desc: String,
	price: Number,
	discount: Number,
	user_id: Schema.ObjectId,
	date : { type : Date, default: Date.now }
}),
product = mongoose.model('product', productSchema);

module.exports = product;