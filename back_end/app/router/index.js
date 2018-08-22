const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const winston = require('winston')
const { requiresLogin, requiresAdmin } = require(__basedir + '/config/middlewares/authorization')
const admin = require(__basedir + '/app/admin')
const users = require(__basedir + '/app/users')
const monitoring = require(__basedir + '/app/monitoring')
const db = require(__basedir + '/db')
const Model = require(__basedir + '/app/models')
const passport = require('passport')
const moment = require('moment')
const uuidv1 = require('uuid/v1');

console.log('db loaded')


//login
router.get('/api/login', function(req, res) {
	res.render('login.ejs', { message: req.flash('loginMessage') });
});
router.post('/api/local_login', passport.authenticate('local-login', { 
	successRedirect: '/', failureRedirect: '/api/login', failureFlash: true
 }), users.login)

//sign-up
router.get('/api/signup', function(req, res) {
	res.render('signup.ejs', { message: req.flash('signupMessage') });
});
router.post('/api/local_login', passport.authenticate('local-login', { 
	successRedirect: '/', failureRedirect: '/api/login', failureFlash: true
 }), users.login)


router.get('/api/logout', users.logout)
router.get('/api/ping', requiresLogin, users.ping)

router.get('/admin/login', admin.renderLogin)
router.post('/admin/login', passport.authenticate('local', { failureRedirect: '/admin/login' }), admin.login)
router.get('/admin/panel', requiresAdmin, admin.renderPanel)

router.get('/health', monitoring.health(db))

router.get('/api/user_item_records/size=:num', function(req, res){
	console.log('getting records')
	console.log('size ', req.params['num'])
	db_connection = db.createConnection;
	db_connection.collection("User_Item").find({}).toArray(function(err, docs){
		if (err) console.log(err)
		for (var i in docs){
			docs[i].price = (docs[i].price/ 100).toFixed(2);
			docs[i].time = moment(docs[i].time).format('YYYY-DD-MM');
		}
		console.log(docs); // it will print your collection data
		res.send(JSON.stringify(docs));
	})
	return;
})

router.get('/api/get_item/id=:id', function(req, res){
	console.log('getting one item')
	console.log('id ', req.params['id'])
	db_connection = db.createConnection;
	db_connection.collection("User_Item").find({postID: req.params['id']}).toArray(function(err, docs){
		if (err) console.log(err)
		docs[0].price = (docs[0].price/ 100).toFixed(2);
		docs[0].time = moment(docs[0].time).format('YYYY-DD-MM');
		console.log(docs); // it will print your collection data
		res.send(JSON.stringify(docs));
	})
	return;
})

router.post('/api/create_user_item', function(req, res){
	console.log('create user item')
	var userItem = new Model.user_item({
		userID: 1,
		postID: uuidv1(),
		title: req.body.title,
		location: req.body.location,
		price: req.body.price,
		time: new Date(),
		body: req.body.body,
		contactInfo : req.body.contactInfo,
		isFulfilled: false,
	})
	db_connection = db.createConnection;
	db_connection.collection("User_Item").insertOne(userItem, function(err){
		if (err){
			console.log('item not sent')
			res.status(503).send({ error : err})
		} else{
			console.log('title ', req.body.title)
			console.log('location ', req.body.location)
			console.log('price ', req.body.price)
			console.log('body ', req.body.body)
			console.log('contactInfo ', req.body.contactInfo)
			console.log('item created')
			res.status(200);
			res.end();
		}
	})
	return;
})

router.post('/api/feedback_redirect', function(req, res){
	console.log('feedback', req.body.feedback)
	var feedback = new Model.feedback({ contactInfo: req.body.contactInfo, feedback: req.body.feedback}); 
	db_connection = db.createConnection;
	console.log('db connection created')
	db_connection.collection("Feedback").insertOne(feedback, function(err){
		console.log('in the mlab api')
		if (err){
			console.log('feedback not sent')
			res.status(503).send({ error : err})
		} else{
			console.log('contactInfo ', req.body.contactInfo)
			console.log('feedback ', req.body.feedback)
			console.log('feedback successful sent')
			res.status(200)
			res.end();
		}
	})
	return;

});

// app.use(function (err, req, res, next) {
// 	if (err.message && (~err.message.indexOf('not found'))) {
// 		return next()
// 	}
// 	return res.status(500).json({error: 'Error on backend occurred.'})
// })

// app.use(function (req, res) {
// 	const payload = {
// 		url: req.originalUrl,
// 		error: 'Not found'
// 	}
// 	if (req.accepts('json')) return res.status(404).json(payload)

// 	res.status(404).render('404', payload)
// })

module.exports = router