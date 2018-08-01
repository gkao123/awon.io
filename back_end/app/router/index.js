var express = require('express')
var router = express.Router()

const winston = require('winston')
const { requiresLogin, requiresAdmin } = require(__basedir + '/config/middlewares/authorization')
const admin = require(__basedir + '/app/admin')
const users = require(__basedir + '/app/users')
const monitoring = require(__basedir + '/app/monitoring')
const db = require(__basedir + '/db')
const Model = require(__basedir + '/app/models')
const passport = require('passport')

console.log('db loaded')

router.get('/test', function(req,res){
	console.log('console_test');
	res.send('test');
	res.newfield('newfield');
});
router.get('/', function(req, res){
	res.render('index.ejs');
});
//login
router.get('api/login', function(req, res) {
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

router.get('/feedback', function(req, res){
	res.render('index.ejs');
});

router.get('/api/create_user_item', function(req, res){
	var userItem = new Model.user_item({
		userID: String,
		title: req.body.item_title,
		location: req.body.item_location,
		time: new Date(),
		body: req.body.item_body,
		isFulfilled: false,
	})
	db_connection = db.connection;
	db_connection.collection("User_Item").insertOne(feedback, function(err, res){
		if (err){
			console.log('item not sent')
			res.status(503).send({ error : err})
		} else{
			console.log('feedback successful sent')
		}
	})
	db_connection.close();
})

router.put('/api/feedback_redirect', function(req, res, next){
	//create instance of model feedback
	console.log('contact info', req.body.contactInfo)
	console.log('feedback body', req.body.feedback)
	var feedback = new Model.feedback({ contactInfo: req.body.contactInfo, feedback: req.body.feedback}); 
	db_connection = db.createConnection;

	db_connection.collection("Feedback").insertOne(feedback, function(err, res){
		if (err){
			console.log('feedback not sent')
			return res.status(503).send({ error : err})
		} else{
			next()
			console.log('feedback successful sent')
			return res.status(200)
		}
	})
	db_connection.close();
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