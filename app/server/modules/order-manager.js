var MongoDB 	= require('mongodb').Db;
var Server 		= require('mongodb').Server;
var ObjectID 	= require('mongodb').ObjectID;
var moment 		= require('moment');
var Join		= require('mongo-join').Join;

var dbPort 		= 27017;
var dbHost 		= 'localhost';
var dbName 		= 'order-lunch';

/* establish the database connection */

var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
db.open(function(e, d){
    if (e) {
        console.log(e);
    }	else{
        console.log('connected to database :: ' + dbName);
    }
});

var orders = db.collection('orders');
var accounts = db.collection('accounts');

exports.placeOrder = function (order, callback)
{
	order.created = new Date();
	order.fullfilled = false;
	orders.insert(order, {safe: true} , callback);
}

exports.getOrdersForUser = function (user, callback) {
	orders.find({user_id: user._id}, {limit: 50}).sort({ created: -1 }).toArray(function(error, results) {
		callback(error, results);
	});
}

exports.getAllOrders = function (callback) {
	orders.find({}, {limit: 50, sort: {created: -1}}, function(err, cursor) {
		var join = new Join(db).on({
			field: 'user_id',
			as: 'user',
			to: '_id',
			from: 'accounts'
		});
		join.toArray(cursor, function(err, orders) {
			callback(err, orders);
		});
	});
}

exports.acceptOrder = function(orderId, callback) {
	orders.update({_id: new ObjectID(orderId)}, {$set: {fullfilled: true}}, {}, function(err) {
		if (err) callback(err);
		else callback();
	});
}
