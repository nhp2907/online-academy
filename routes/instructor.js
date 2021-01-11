const express = require('express')
const router = express.Router();
const {v4: uuid} = require('uuid');
const fs = require('fs')

const CourseService = require('../service/course.service');
const CategoryService = require('../service/category.service')

const multer = require('multer')
const UserRole = require("../constant/UserRole");
const PRODUCT_IMAGE_PATH = "public/assets/images/products/";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, PRODUCT_IMAGE_PATH)
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
})
const upload = multer({storage: storage});

router.use((req, res, next) => {
    const user = res.locals.user;
    if (!user) {
        res.redirect('/auth')
    } else if (res.locals.user && res.locals.user.roleId !== UserRole.Instructor) {
        console.log('pass checking roleId')
        res.redirect('/error/401') ;
    } else {
        next();
    }
});

/**
 * get instructor page
 */
router.get('/', async (req, res) => {
    res.render('pages/instructor/instructor', {
        css: ['instructor'],
        user: res.locals.user,
        courses: await CourseService.findByInstructorId(res.locals.user.id)
    });
})

/**
 * render add-course view
 */
router.get("/add-course", async (req, res) => {
    res.render('pages/instructor/add-course', {
        css: ['add-course'],
        user: res.locals.user,
        categories: await CategoryService.getAllCategories(),
        levels: await CourseService.getAllLevel()
    })
})

/**
 * Add new course
 */
router.post('/course', upload.single('image'), async (req, res, next) => {
    const course = req.body;
    const file = req.file;
    console.log(req.body)
    const categoryLink = await CategoryService.findCategoryLink(course.categoryId, course.subCategoryId);
    course.categoryLinkId = categoryLink.id;
    course.instructorId = res.locals.user.id;
    course.advancementId = 4;
    course.image = 'assets/images/products/' + file.filename;
    const savedCourse = await CourseService.save(course);

    res.redirect('/instructor')
})

/**
 * get edit-course view
 */
router.get('/edit-course/:id', async (req, res) => {
    const id = req.params.id
    res.render('pages/instructor/edit-course', {
        css: ['add-course'],
        user: res.locals.user,
        course: await CourseService.findById(id),
        categories: await CategoryService.getAllCategories(),
        levels: await CourseService.getAllLevel()
    })
})

/**
 * edit course
 */
router.post('/edit-course', upload.single('image'), async (req, res, next) => {
    const course = req.body;
    const file = req.file;
    console.log('req.body', req.body)
    const categoryLink = await CategoryService.findCategoryLink(course.categoryId, course.subCategoryId);
    course.categoryLinkId = categoryLink.id;
    course.instructorId = res.locals.user.id;
    course.advancementId = 4;
    if (file) {
        const oldCourse = await CourseService.findById(course.id);
        fs.rmSync(`public/` + oldCourse.image, {
            force: true,
        });
        course.image = 'assets/images/products/' + file.filename;
    }
    const savedCourse = await CourseService.update(course);

    res.redirect('/instructor')
})

/**
 * delete course
 */
router.delete('/course', (req, res, next) => {

})


router.get('/account', (req, res, next) => {

})

module.exports = router;