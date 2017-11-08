const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8888;
const routes = require('./routes');

//----------AUTHENTICATION-------------
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');
// const bcrypt = require('bcrypt');
// const saltRounds = 12;
// const redis = require('connect-redis')(session);
//----------------------------------

const app = express();

// enabling json body-parser and encoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : false }));

//----------PASSPORT - AUTHENTICATION----
// app.use(session({
//   // store: new redis(),
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, done) => {
//   console.log('serializing');
//   return done(null, {
//     id: user.id,
//     username: user.username
//   });
// });

// passport.deserializeUser((user, done) => {
//   console.log('DEserialing');
//   User.findOne({where: {id: user.id}})
//   .then(user => {
//     return done.null, {
//       id: user.id,
//       username: user.username
//     };
//   });
// });

// passport.use(new LocalStrategy(function(username, password, done){
//   User.findOne({ where: {username: username} })
//   .then(user => {
//     if(user === null) {
//       return done(null, false, { message: 'Bad username or password. Please try again'});
//     }else{
//       bcrypt.compare(password, user.password)
//       .then(res => {
//         console.log(res);
//         if(res){
//           return done(null, user);
//         }else{ //limit user access
//           return done(null, false, { message: 'Bad username or password. Please try again'});
//         }
//       })
//       .catch((err) => {
//         console.log('Error: ', err);
//       });
//     }
//   });
// }));


// app.post('/api/users', (req, res) => {
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(req.body.password, salt, function(err, hash) {
//       User.create({
//         username: req.body.username,
//         password: hash
//       })
//       .then((newUser) => {
//         return res.json(newUser);
//       })
//       .catch((err) => {
//         console.log('Error: ', err);
//       });
//     });
//   });
// });

// //verify user authentication
// function isAuthenticated(req, res, next) {
//   if(req.isAuthenticated()) {
//     next();
//   }else{
//     res.redirect('/');
//   }
// }
//-----------------------------------------------------------

app.use('/api', routes);

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});

