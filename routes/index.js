const express = require('express')
const router = express.Router();
const Category = require('../models/category')
const user = {};
const { getAllCategories, getMostEnrollCategories } = require('../service/category.service');
const { getTopCoursesInWeek, getNewestCourses, getMostEnrollCourses } = require('../service/course.service');
const AuthService = require('../service/auth.service')
const Course = require("../service/course.service");
const CourseService = require("../service/course.service");


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

router.get('/', async (req, res) => {
    res.render('pages/home', {
        css: ['home', 'star-rating-svg'],
        user: null,
        categories: await getAllCategories(),
        topEnrollCategories: await getMostEnrollCategories(),
        topCoursesInWeek: await getTopCoursesInWeek(),
        newestCourses: await getNewestCourses(),
        mostEnrollCourses: await getMostEnrollCourses()
    });
})

/**
 * render course view with specific id
 */
router.get('/courses', (req, res) => {
    const { category } = req.query;
    res.render('/courses', {
        user
    })
})

router.get('/courses/:id', async (req, res) => {
    const reqId = 1;
    try {
        const course = await CourseService.findById(reqId);
        console.log(course);
        res.render('pages/course-detail', {
            css: ['course-detail'],
            course,
        })
    } catch (error) {
        console.log(error)
    }
});

/**
 * Search courses by criteria. Criteria could be name, author, category,...
 * return {}
 */
router.get('/search', (req, res) => {
    const { criteria } = req.params;
    res.send(['list of course']);
});


module.exports = router;