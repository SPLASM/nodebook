const loggedIn = require('../middleware/loggedIn.js');
const path = require('path');

const login = {
  post: (req, res, next) => {
    loggedIn.login(req, res, next);
  },
  get: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/index.html'));
  }
};


module.exports = login;
