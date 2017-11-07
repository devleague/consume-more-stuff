const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8888;


app.use(function (req, res, next) { // allowing front end to talk to back end
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));


app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});
