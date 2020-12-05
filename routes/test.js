const express = require('express')
const User = require("../models/user");
const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

module.exports = router;