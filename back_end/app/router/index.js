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
	db_connection = db.connection;
	db.collection.find().sort({ $natural: -1 }).limit(req.params['size']).lean().exec(function(err, docs){
		if (err){
			console.log('item not sent')
			res.status(503).send({ error : err})
		} else{
			doc
			res.end(JSON.stringify(docs))
		}
	})
	db_connection.close();
})

router.post('/api/create_user_item', function(req, res){
	var userItem = new Model.user_item({
		userID: String,
		title: req.body.item_title,
		location: req.body.item_location,
		time: new Date(),
		body: req.body.item_body,
		isFulfilled: false,
	})
	db_connection = db.connection;
	db_connection.collection("User_Item").insertOne(userItem, function(err){
		if (err){
			console.log('item not sent')
			res.status(503).send({ error : err})
		} else{
			res.status(202)
		}
	})
	db_connection.close();
})

router.put('/api/feedback_redirect', function(req, res, next){
	console.log('feedback', req.body.feedback)
	var feedback = new Model.feedback({ contactInfo: req.body.contactInfo, feedback: req.body.feedback}); 
	db_connection = db.createConnection;
	db_connection.collection("Feedback").insertOne(feedback, function(err){
		if (err){
			console.log('feedback not sent')
			db_connection.close();
			return res.status(503).send({ error : err})
		} else{
			console.log('feedback successful sent')	
		}
	})
	console.log('hit?')
	db_connection.close();
	return res.status(200)
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