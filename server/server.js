const express         = require('express');
const session         = require('express-session');
const bodyParser      = require('body-parser');
const passport        = require('passport');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const {user}          = db;
const Redis           = require('connect-redis')(session);
const LocalStrategy   = require('passport-local').Strategy;
var cors              = require('cors')
const saltRounds      = 12;
const PORT            = process.env.PORT || 3000;
const app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Authentication:
app.use(session({
  store: new Redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use(cors())
app.use('/api', routes);

passport.serializeUser((user,done) => {
  console.log("serializing");
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  db.user.findOne({where: { id: user.id}})
  .then(user => {
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
    db.user.findOne({where: { username: username } })
    .then( user => {
      if(user === null) {
        return done(null, false, {message: 'bad username or password'});
      }
      else {
        bcrypt.compare(password, user.password)
        .then (res => {
          console.log(res);
          if (res) {return done(null, user); }
          else {
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch(err =>{
      console.error('error: ', err);
  });
}));


app.get('/', ( req, res ) =>{
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite:
  console.log(`Server connected on PORT: ${PORT}`);
});