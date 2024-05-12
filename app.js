const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const helmet = require('helmet');
const dotEnv = require('dotenv');
dotEnv.config();
const path = require('path');



// const userRoutes = require('./routes/user');
const formTest = require('./routes/form-test');

const app = express();
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.9tnlb.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Boundary');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use(helmet());

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/form-test', formTest);

module.exports = app;