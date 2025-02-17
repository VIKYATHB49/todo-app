const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.render('index', { tasks });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Add new task
router.post('/add', async (req, res) => {
    try {
        const newTask = new Task({ title: req.body.title });
        await newTask.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Update task (completion status or title)
router.post('/edit/:id', async (req, res) => {
    try {
        const updateData = {};
        if (req.body.completed !== undefined) {
            updateData.completed = req.body.completed;
        }
        if (req.body.title !== undefined) {
            updateData.title = req.body.title;
        }
        await Task.findByIdAndUpdate(req.params.id, updateData);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Delete task
router.post('/delete/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;