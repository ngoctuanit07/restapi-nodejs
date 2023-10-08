// controllers/userController.js

const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.createUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.updateUser = async (req, res) => {
    try {
        const result = await User.update(req.params.id, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await User.delete(req.params.id);
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.send('User deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};