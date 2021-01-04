const express = require('express')
const router = express.Router();
const Category = require('../models/category')
const user = {};
const { getAllCategories, getMostEnrollCategories, getPopularSubCategoriesByCategory, getSubCategoriesByCategory } = require('../service/category.service');
const { getTopCoursesInWeek, getNewestCourses, getMostEnrollCourses, getCategoryCourses, getPopularCategoryCourses} = require('../service/course.service');
const CourseService = require("../service/course.service");
const CourseReviewService = require("../service/course-review.service");
const { getAllInstructor } = require('../service/user.service');

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
        css: ['home', 'star-rating-svg','slick','slick-theme'],
        user: null,
        categories: await getAllCategories(),
        topEnrollCategories: await getMostEnrollCategories(),
        topCoursesInWeek: await getTopCoursesInWeek(),
        newestCourses: await getNewestCourses(),
        mostEnrollCourses: await getMostEnrollCourses(),
        instructors: await getAllInstructor()
    });
})

function setFilter(requestPage, requestRating, requestDuration, requestPrice, requestLevel, requestOrder, requestTopic){

    const page = requestPage !== undefined ? requestPage : 1;
    const rating = requestRating !== undefined ? requestRating : 3.0;
    const order = requestOrder !== undefined ? requestOrder : 'top-enrolled';
    const topic = requestTopic !== undefined ? requestTopic.replace(/\-/g, ' ').replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()) : '';

    const duration = [];
    if(requestDuration === undefined){
        duration[0] = 0;
        duration[1] = 999;
    }else{
        const durationArray = []
        if(requestDuration.includes('short')) { 
            durationArray.push(0);
            durationArray.push(10);
        }
        if(requestDuration.includes('medium')) {
            durationArray.push(10);
            durationArray.push(20);
        }
        if(requestDuration.includes('long')) {
            durationArray.push(20);
            durationArray.push(30);
        }
        if(requestDuration.includes('extra')) {
            durationArray.push(30);
            durationArray.push(999);
        }
        durationArray.sort((a, b) => a - b);
        duration[0] = durationArray[0];
        duration[1] = durationArray[durationArray.length - 1];
    }

    const price = [];
    if(requestPrice === undefined){
        price[0] = 0;
        price[1] = 999;
    }else{
        if(requestPrice.includes("free")) { 
            price[0] = 0;
            price[1] = 0;
        }else{
            price1[0] = 1;
            price1[1] = 999;
        }
    }
    var level = [];
    if(requestLevel === undefined){
       level = [...[1,2,3,4]];
    }else{
        if(requestLevel.includes("beginner"))
            level.push(1);
        if(requestLevel.includes("intermediate"))
            level.push(2);
        if(requestLevel.includes("expert"))
            level.push(3);
        if(requestLevel.includes("all-levels"))
            level.push(4);
    }
    return {page, rating, duration, price, level, order, topic}
}

router.get('/collection/*/', async (req, res) => {

    const {page, rating, duration, price, level, order, topic} = setFilter(req.query.page, req.query.rating, req.query.duration, req.query.price, req.query.level, req.query.order, req.query.topic);

    const {pageCount: {totalItems, totalPages, currentPage}, categorycourses: categoryCourses} = await getCategoryCourses(req.query.id, page, size = 5, duration, rating, level, price, order, topic);

    res.render('pages/category-detail', {
        css: ['category-detail', 'star-rating-svg'],
        user: null,
        categories: await getAllCategories(),
        totalItems, totalPages, currentPage, categoryCourses,
        popularCategoryCourses: await getPopularCategoryCourses(req.query.id),
        popularSubCategories: await getPopularSubCategoriesByCategory(req.query.id),
        subcategoriesByCategory: await getSubCategoriesByCategory(req.query.id)
    });
});

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
    const courseId = req.params.id;
    try {
        const course = await CourseService.findById(courseId);
        const numReview = await  CourseReviewService.countNumberOfRating(courseId);
        const five = await CourseReviewService.countNumberOfRating(courseId, 5);
        const four = await CourseReviewService.countNumberOfRating(courseId, 4);
        const three = await CourseReviewService.countNumberOfRating(courseId, 3);
        const two = await CourseReviewService.countNumberOfRating(courseId, 2);
        const one = await CourseReviewService.countNumberOfRating(courseId, 1);

        console.log('numReview: ', numReview);
        course.review = {
            five: Math.round((five / numReview) * 100),
            four: Math.round((four / numReview) * 100),
            three: Math.round((three / numReview) * 100),
            two: Math.round((two / numReview) * 100),
            one: Math.round((one / numReview) * 100),
        }

        console.log('course: ', course);
        res.render('pages/course-detail', {
            css: ['course-detail', 'star-rating-svg'],
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