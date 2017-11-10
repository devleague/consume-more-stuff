/* jshint esversion:6 */
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
const User = db.User;

/*AUTHENTICATION*/
passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id : user.id,
    username : user.username,
    role : user.role
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing', user);
  User.findById(user.id)
    .then(user => {
      if (!user) return done(null, false);
      return done(null, {
        id : user.id,
        username : user.username,
        role : user.role
      });
    });
});

passport.use(new LocalStrategy(function(username, password, done) {

  User.findOne({ where : { username : username }})
    .then(user => {      
      if (user === null) {
        return done(null, false, { message : 'bad username or password' });
      }
      else {        
        bcrypt.compare(password, user.password)
          .then(res => {
            // res 'basically' tells you TRUE or FALSE
            if (res) {
             return done(null, user); }
            else {
              return done(null, false, { message : 'bad username or password'});
            }
          });
      }
    })
    .catch(err => { console.log('error : ', err); });
}));

module.exports = passport;