const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const bcrypt = require('bcrypt');

const usersRoute = require('./routes/users');
const itemsRoute = require('./routes/items');

const User = require('./db/models/User');
const auth = require('./isAuthenticated');

const PORT = process.env.PORT || 8080;
const app = express();
const saltRounds = 12;

app.use(bodyParser.json());
app.use(session({
  store: new Redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serializing');
  console.log('user', user);
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  console.log('user', user);
  new User({ id: user.id }).fetch()
  .then(user => {
    user = user.toJSON();
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  return new User({ username: username }).fetch()
  .then(user => {
    if (user) {
      user = user.toJSON();
    }
    if (user === null) {
      return done(null, false, { message: 'Incorrect username or password' });
    } else {
      bcrypt.compare(password, user.password)
      .then(result => {
        if (result) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect username or password' });
        }
      }); 
    }
  })
  .catch(err => {
    console.log('Local strategy error', err);
  });
}));

app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(401).json({
        error: 'User is not authenticated',
        authenticated: false
      });
    }
    req.logIn(user, err => {
      if (err) { return next(err); }
      return res.status(200).json({
        user: {
          email: user.email,
          username: user.username,
          updated_at: user.updated_at,
          created_at: user.created_at,
          id: user.id
        },
        authenticated: true
      });
    });
  })(req, res, next);
});

app.get('/api/logout', (req, res) => {
  req.logout();
  return res.status(200).json({
    authenticated: false
  });
});

app.post('/api/register', (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) { console.log('err', err); }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) { console.log('err', err); }
      new User({
        email: req.body.email,
        username: req.body.username,
        password: hash,
        user_status_id: 1
      })
      .save()
      .then(user => {
        user = user.toJSON();
        return res.status(200).json({
          user: {
            email: user.email,
            username: user.username,
            updated_at: user.updated_at,
            created_at: user.created_at,
            id: user.id
          },
          registered: true
        });
      })
      .catch(err => {
        console.log('err', err);
        return res.status(400).json({
          error: 'Unable to register user',
          registered: false
        });
      });
    });
  });
});

app.put('/api/users/:id/settings', auth, (req, res) => {
  let userId = req.params.id;
  let update = { id, email, username } = req.body.user;

  return new User({ id: userId }).fetch()
  .then(user => {
    if (user) {
      user = user.toJSON();
    }
    if (user === null) {
      return done(null, false, { error: 'Incorrect username or password' });
    } 
    else {
      console.log('user', user);
      console.log('req.body', req.body);
      bcrypt.compare(req.body.user.password, user.password)
      .then(result => {
        console.log('result', result);
        if (result) {
          bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) { console.log('err', err); }
            bcrypt.hash(req.body.user.newPassword, salt, (err, hash) => {
              if (err) { console.log('err', err); }
              new User({id: userId})
              .save({ password: hash, username, email, id }, { patch: true })
              .then(user => {
                user = user.toJSON();
                console.log('user', user);
                return res.status(200).json({
                  user: {
                    email: user.email,
                    username: user.username,
                    updated_at: user.updated_at,
                    created_at: user.created_at,
                    id: user.id,
                    password: user.password
                  },
                  registered: true,
                  updatedPassword: true
                });
              })
              .catch(err => {
                console.log('err', err);
                return res.status(400).json({
                  error: 'Unable to change password',
                  updatedPassword: false
                });
              });
            });
          });
        } 
        else {
          return res.status(401).json({
            error: 'Incorrect current password',
            registered: true,
            updatedPassword: false
          });
        }
      })
      .catch(err => {
        console.log('err', err);
        return res.status(400).json({
          error: 'Unable to change password',
          updatedPassword: false
        });
      });
    }
  });
});

app.use('/api/items', itemsRoute);
app.use('/api/users', usersRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});