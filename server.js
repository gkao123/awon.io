// server.js

// set up ======================================================================
// get all the tools we need
const express  = require('express');
const passport = require('passport');
const winston = require('winston');
const db = require('./db');

const port     = process.env.PORT || 3000;
const app   = express();

require('./config/passport')(passport, db)
require('./config/express')(app, passport, db.pool)
require('./config/routes')(app, passport, db)


// launch ======================================================================
const server = app.listen(port, () => {
	if(app.get('env') === 'test') return
	console.log("listeing on port " + port)
})

server.on('close', () => {
	console.log('Closed express server')

	db.pool.end(() => {
		console.log('Shut down connection pool')
	})
})