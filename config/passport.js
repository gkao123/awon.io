///config/passport.js
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;

passport.use('local-login', new LocalStrategy((username, password, done) => {
    db.query('SELECT id, username, password, type FROM users WHERE username=$1', [username], (err, result) => {
      if(err) {
        winston.error('Error when selecting user on login', err)
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }
  
      if(result.rows.length > 0) {
        const first = result.rows[0]
        bcrypt.compare(password, first.password, function(err, res) {
          if(res) {
            return done(null, { id: first.id, username: first.username, type: first.type })
           } else {
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
           }
         })
       } else {
         return done(null, false)
       }
    })
  }))
passport.use('local-signup', new LocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true 
  },
  function(req, email, password, done) {

      // asynchronous
      process.nextTick(function() {
        db.query('SELECT id, username, password, type FROM users WHERE username=$1', [username], (err, result) => {
          if(err) {
            winston.error('Error when selecting user on login', err)
            return done(null, false, req.flash('loginMessage', 'No user found.'));
          }
        }
          User.findOne({'local.email': email}, function(err, existingUser) {
              if (err)
                  return done(err);
              if (existingUser)
                  return done(null, false, req.flash('signupMessage', 'That email is already taken.'));

              //  If we're logged in, we're connecting a new local account.
              if(req.user) {
                  var user            = req.user;
                  user.local.email    = email;
                  user.local.password = user.generateHash(password);
                  user.save(function(err) {
                      if (err)
                          throw err;
                      return done(null, user);
                  });
              }
              //  We're not logged in, so we're creating a brand new user.
              else {
                  // create the user
                  var newUser            = new User();

                  newUser.local.email    = email;
                  newUser.local.password = newUser.generateHash(password);

                  newUser.save(function(err) {
                      if (err)
                          throw err;

                      return done(null, newUser);
                  });
              }

          });
      });

  }));
