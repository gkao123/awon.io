///config/passport.js
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  
  passport.deserializeUser((id, cb) => {
    db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
      if(err) {
        winston.error('Error when selecting user on session deserialize', err)
        return cb(err)
      }
  
      return cb(null, results.rows[0])
    })
  })

passport.use('local-login', new LocalStrategy((username, password, done) => {
    db.query('SELECT username, password FROM users WHERE username=$1', [username], (err, result) => {
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
  }));
  passport.use('local-signup', new LocalStrategy((username, password, done) => {
    hashPW = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    db.query('INSERT INTO USERS VALUES {username, password} FROM users WHERE username=$1 AND password=$2 ', [username, password], (err, result) => {
      if(err) {
        winston.error('Existing User', err)
        return done(null, false, req.flash('existinguser', 'The username is taken!'));
      } else{
        return done(null, {username: username})
      }
    })))

  passport.use(new FacebookStrategy({

    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

},
function(req, token, refreshToken, profile, done) {

    // asynchronous
    process.nextTick(function() {

        // check if the user is already logged in
        if (!req.user) {

            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if there is a user id already but no token (user was linked at one point and then removed)
                    if (!user.facebook.token) {
                        user.facebook.token = token;
                        user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                        user.facebook.email = profile.emails[0].value;

                        user.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                    }

                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user, create them
                    var newUser            = new User();

                    newUser.facebook.id    = profile.id;
                    newUser.facebook.token = token;
                    newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                    newUser.facebook.email = profile.emails[0].value;

                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });

        } else {
            // user already exists and is logged in, we have to link accounts
            var user            = req.user; // pull the user out of the session

            user.facebook.id    = profile.id;
            user.facebook.token = token;
            user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
            user.facebook.email = profile.emails[0].value;

            user.save(function(err) {
                if (err)
                    throw err;
                return done(null, user);
            });

        }
    });

}));