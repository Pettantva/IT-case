var mongoose = require('mongoose');

//Carmodel schema
var carmodelSchema = mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	brand:{
		type: String,
		required: true
	},
	model:{
		type: String,
		required: true
	},
	price:{
		type: String,
		required: true
	}
});

var Carmodel = module.exports = mongoose.model('Carmodel', carmodelSchema);

//Get Carmodels
module.exports.getCarmodels = function(callback, limit){
	Carmodel.find(callback).limit(limit);
}

//Add Carmodels
module.exports.addCarmodel = function(carmodel, callback){
	Carmodel.create(carmodel, callback);
}
