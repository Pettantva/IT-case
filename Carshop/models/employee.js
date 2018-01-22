var mongoose = require('mongoose');

//Employee schema
var employeeSchema = mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	}
});

var Employee = module.exports = mongoose.model('Employee', employeeSchema);

//Get employees
module.exports.getEmployees = function(callback, limit){
	Employee.find(callback).limit(limit);
}