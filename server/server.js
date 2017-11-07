
const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8888;
const routes = require('./routes');




// allowing the front end to get information from the backend
// app.use(function (req, res, next) { // allowing front end to talk to back end
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

const app = express();
// enableing json body-parser and encoding 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : false }));

// app.use(express.static('public'));


app.use('/api', routes);

// app.get('*', (req, res) => {
//   res.sendFile('index.html', {root: path.join(__dirname, '/public') });
// });

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});





