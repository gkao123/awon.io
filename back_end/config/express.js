// config/express.js

const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const morgan = require('morgan')
const winston = require('winston')
const config = require('./')

const router = require(__basedir + '/app/router')

const env = process.env.NODE_ENV || 'development'

module.exports = (app, passport, db) => {
	let log = 'dev'
	if (env !== 'development') {
		log = {
			stream: {
				write: message => winston.info(message)
			}
		}
	}
	if (env !== 'test') app.use(morgan(log))

	app.set('views', path.join(config.root, 'views'))
	app.set('view engine', 'ejs')

	app.use(methodOverride(function (req) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			var method = req.body._method
			delete req.body._method
			return method
		}
	}))

	app.use(cookieParser(env.session_secret))

	app.use(passport.initialize())
	app.use(passport.session())

	app.use('/', express.static(path.join(config.root, 'public')))
	app.use('/', router)
}