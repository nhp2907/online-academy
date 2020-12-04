const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.get('/category', (req, res, next) => {
    res.render('home', {
        user: res.locals.user,
        category: Category.findAll()
    })
})

module.exports = router;