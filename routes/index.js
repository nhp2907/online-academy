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

    console.log('user in locals', res.locals.user);
    res.render('pages/home', {
        css: ['home', 'category'],
        user: {
            first_name: 'To',
            last_name: 'Hoang Trung',
            email: 'hoangtrung14121412@gmail.com',
            cart: [{
                img: 'https://img-a.udemycdn.com/course/100x100/903744_8eb2.jpg?aXA7ok7UExM3Tj2ueLlwBo2JMg2JMV-d6vCuxYZfzzD5VWRAtYmgScx5dOchgqwII6bJPZzzCPWtub1SiyoNIz99X1wec459O3KwwF4LyjS1_ghwG3EkWm1mOR7r',
                name: 'Python for Data Science and Machine Learning Bootcamp',
                author: 'Jose Portilla',
                price: '11.99',
                pre_price: '129.99'
                },
            {
                img: 'https://courseupload.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-27-at-2.20.51-PM.png',
                name: 'WordPress Become a WordPress Developer: Unlocking Power With Code',
                author: 'Brad Schiff',
                price: '16.79',
                pre_price: '179.99'
            },
            {
                img: 'https://freecourseudemy.com/wp-content/uploads/2020/01/The-Modern-React-Bootcamp-Hooks-Context-NextJS-Router.jpg',
                name: 'The Modern React Bootcamp (Hooks, Context, NextJS, Router)',
                author: 'Colt Steele',
                price: '11.99',
                pre_price: '129.99'
            }],
            course: [{
                img: 'https://i.ytimg.com/vi/Stj9I9_Q_6w/maxresdefault.jpg',
                name: 'Angular 2 & 4 complete tutorial with additional firebase Your progress',
                progress: '0'
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAhkyqgta5EHx9SYy3VqReC5TLek-cSDWAA&usqp=CAU',
                name: 'MEAN Stack For Web Developers: Build Websites on Javascript',
                progress: '25'
            },
            {
                img: 'https://desirecourse.net/wp-content/uploads/2018/09/7867856.jpg',
                name: 'The Coding Interview Bootcamp: Algorithms + Data Structures',
                progress: '80'
            }],
            notification: [{}]
        },
        category: Category.findAll(),
    })
})

/**
 * search
 */
router.get('/courses', (req, res) => {
    const { category } = req.query;
    res.render('/courses', {
        user
    })
})

router.get('/courses/:id', (req, res) => {
    const reqId = req.params.id;
    try{
        const course = Course.findById(reqId);
        res.render('pages/course-detail',{
            css: ['course-detail'],
            course,
        })
    }catch(error){
        console.log(res.console.error())
    }
})

/**
 * Search courses by criteria. Criteria could be name, author, category,...
 * return {}
 */
router.get('/search', (req, res) => {
    const { criteria } = req.params;
    res.send(['list of course']);
})


module.exports = router;