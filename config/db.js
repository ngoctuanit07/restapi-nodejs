// config/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qaz123456',
    database: 'todoapp'
});

connection.connect();

module.exports = connection;