///config/passport.js
const LocalStrategy    = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
const uuidv1 = require('uuid/v1'); 

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
        if(err) {
            winston.error('Error when selecting user on session deserialize', err)
            return done(err)
        }

        done(null, results.rows[0])
    })
})

passport.use('local-login', new LocalStrategy((username, password, done) => {
    db.query('SELECT username, id, password FROM users WHERE username=$1', [username], (err, result) => {
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
    var uniqueID = uuidv1()
    db.query('INSERT INTO USERS VALUES {id, username, password} FROM users WHERE id=$1 AND username=$2 AND password=$3',
        [uniqueID, username, hashPW], (err, result) => {
        if(err) {
            winston.error('Existing User', err)
            return done(null, false, req.flash('existinguser', 'The username is taken!'));
        } else{
            return done(null, {username: username})
        }
    })
}))
