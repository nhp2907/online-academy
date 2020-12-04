const express = require('express')
const router = express.Router();
const Category = require('../models/category')
const user = {};

router.get('/', (req, res) => {
    res.render('pages/home', {
        css: ['home', 'category'],
        user: res.locals.user,
        category: Category.findAll(),
    })
})

/**
 * search
 */
router.get('/courses', (req, res) => {
    const {category} = req.query;
    res.render('/courses', {
        user
    })
})

/**
 * Search courses by criteria. Criteria could be name, author, category,...
 * return {}
 */
router.get('/search', (req, res) => {
    const {criteria} = req.params;
    res.send(['list of course']);
})

module.exports = router;