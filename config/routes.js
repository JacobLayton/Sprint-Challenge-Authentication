const axios = require('axios');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { authenticate, generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  const credentials = req.body;
  console.log(credentials);

  const hash = bcrypt.hashSync(credentials.password, 14);
  credentials.password = hash;
  db('users')
    .insert(credentials)
    .then(function(ids) {
      db('users')
        .where({ id: ids[0] })
        .first()
        .then(user => {
          const token = generateToken(user);
          res.status(201).json(token);
        });
    })
    .catch(err => res.status(500).json(err));
}

function login(req, res) {
  const credentials = req.body;

  db('users')
    .where({ username: credentials.username })
    .first()
    .then(function(user) {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = generateToken(user);
        res.send(token);
      } else {
        return res.status(401).json({ error: 'Incorrect credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({err});
    });
};

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
