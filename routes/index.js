const express = require('express')
const router = express.Router();
const Category = require('../models/category')
const user = {};
const AuthService = require('../service/auth.service')


router.get('/auth', (req, res) => {
    res.render('pages/auth', {
      layout: 'blank',
      css: ['auth']
  })
})
router.post('/signin', (req, res) => {
    console.log("--------------");
    console.log('request.body', req.body);
    const user = res.locals.user; 

        // const token = await AuthService.signin({username, password});
        // if (token != null) {
        //     res.render('pages/home', {
        //         css: ['home'],
        //         user: {
        //             token: token,
        //             name: req.body.username
        //         }
        //     })
        // } else {
        //     res.send({statusCode: 200})
        // }
    
})
router.post('/signup', (req, res) => {
//     res.render('pages/signin', {
      
//   })
})

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