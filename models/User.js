// models/User.js

const db = require('../config/db');

const User = {

    findAll: () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users';

            db.query(sql, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users WHERE id = ?';

            db.query(sql, id, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    },

    create: (user) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO users SET ?';

            db.query(sql, user, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    },

    update: (id, user) => {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE users SET ? WHERE id = ?';

            db.query(sql, [user, id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM users WHERE id = ?';

            db.query(sql, id, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

};

module.exports = User;