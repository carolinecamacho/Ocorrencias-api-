
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'caroline',
  password: '123',
  database: 'ocorrencias-cidade',
  });

module.exports = connection;