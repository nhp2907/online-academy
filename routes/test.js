const express = require('express')
const User = require("../models/user");
const Course = require("../models/course");
const CourseService = require("../service/course.service");
const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

router.get('/courses', async (req, res) => {
    const users = await CourseService.findAll();
    res.send(users);
})

module.exports = router;