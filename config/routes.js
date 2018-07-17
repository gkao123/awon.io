const winston = require('winston')
const { requiresLogin, requiresAdmin } = require('./middlewares/authorization')
const admin = require('../app/admin')
const users = require('../app/users')
const monitoring = require('../app/monitoring')

module.exports = (app, passport, db) => {
    app.get('/', function(req, res){
        res.render('index.ejs');
	});
	//login
	app.get('api/login', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	app.post('/api/local_login', passport.authenticate('local-login', { 
		successRedirect: '/', failureRedirect: '/api/login', failureFlash: true
	 }), user.login)
	app.post('/api/fb_login', passport.authenticate('fb-login', { 
		successRedirect: '/', failureRedirect: '/api/login', failureFlash: true
	 }), user.login)
	app.post('/api/google_login', passport.authenticate('google-login', { 
		successRedirect: '/', failureRedirect: '/api/login', failureFlash: true
	}), user.login)
	//sign-up
	app.get('/api/signup', function(req, res) {
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});
	app.post('/api/local_login', passport.authenticate('local-login', { 
		successRedirect: '/', failureRedirect: '/api/login', failureFlash: true
	 }), user.login)




	app.get('/api/logout', users.logout)
	app.get('/api/ping', requiresLogin, users.ping)

	app.get('/admin/login', admin.renderLogin)
	app.post('/admin/login', passport.authenticate('local', { failureRedirect: '/admin/login' }), admin.login)
	app.get('/admin/panel', requiresAdmin, admin.renderPanel)

	app.get('/health', monitoring.health(db))

	app.use(function (err, req, res, next) {
		if (err.message && (~err.message.indexOf('not found'))) {
			return next()
		}

		winston.error(err.stack)

		return res.status(500).json({error: 'Error on backend occurred.'})
	})

	app.use(function (req, res) {
		const payload = {
			url: req.originalUrl,
			error: 'Not found'
		}
		if (req.accepts('json')) return res.status(404).json(payload)

		res.status(404).render('404', payload)
	})
}