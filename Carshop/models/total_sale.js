var mongoose = require('mongoose');

//total_sale schema
var total_saleSchema = mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	sales:{
		type: String,
		required: true
	}
});

var Total_sale = module.exports = mongoose.model('Total_sale', total_saleSchema);

//Get Total_sales
module.exports.getTotal_sales = function(callback, limit){
	Total_sale.find(callback).limit(limit);
}