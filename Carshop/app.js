var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Employee =require('./models/employee')
Carmodel =require('./models/carmodel')
Total_sale =require('./models/total_sale')

//Connect to mongoose
mongoose.connect('mongodb://localhost/carshop');
var db = mongoose.connection;

app.get('/', function(req,res){
	res.send('Please use1 /api/employees or /api/carmodels or /api/total_sales');
});

app.get('/api/employees', function(req, res){
	Employee.getEmployees(function(err, employees){
		if(err){
			throw err;
		}
		res.json(employees);
	})
})

app.get('/api/total_sales', function(req, res){
	Total_sale.getTotal_sales(function(err, total_sales){
		if(err){
			throw err;
		}
		res.json(total_sales);
	})
})

app.get('/api/carmodels', function(req, res){
	Carmodel.getCarmodels(function(err, carmodels){
		if(err){
			throw err;
		}
		res.json(carmodels);
	})
})

app.post('/api/carmodels', function(req, res){
	var carmodel = req.body;
	Carmodel.addCarmodel(carmodel, function(err, carmodel){
		if(err){
			throw err;
		}
		res.json(carmodel);
	})
})

app.listen(3000);
console.log('Running on port 3000');
