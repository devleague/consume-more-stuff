[hip,hip] ReadMe Notes:



Server setup: 
express setup - entry point server.js
routes setup:
  route.use('/users', users);
  route.use('/items', items);
  route.use('/categories', categories);
  route.use('/conditions', conditions);

For config file:
```json
"development": {
  "username": "username",
  "password": "hiphip",
  "database": "cmsdb",
  "host": "127.0.0.1",
  "dialect": "postgres"
}
```

```sql
CREATE DATABASE cmsdb;
```







React App name: cms


sequelize seed:create --name users-seed-file  - has already been run
sequelize seed:create --name items-seed-file  - has already been run


NPM modules installed:
The following NPM modules were installed please:
npm install

npm install --save express
npm install --save express-session
npm install --save body-parser
npm install --save method-override
npm install --save passport
npm install --save bcrypt
npm install --save path
npm install --save connect-redis express-session
npm install --save passport-local
npm install --save cors
npm install --save redux
npm install --save react-redux
npm install --save react react-dom
npm install --save react-router-dom
npm install --save redux-thunk
npm install sequelize --save
npm install pg pg-hstore --save




