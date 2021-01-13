const express = require('express');
const Category = require('../models/category');
const router = express.Router();
const AuthService = require('../service/auth.service')

const {getAllCategories, getCategoryById, updateCategory, createNewCategory, createNewSubCategory} = require('../service/category.service');
const { getAllUser, getUserById, changeRoleUser } = require('../service/user.service');

router.get('/category', (req, res, next) => {
    res.render('home', {
        user: res.locals.user,
        category: Category.findAll()
    })
});

router.post('/change-role/user', async (req, res) => {
    var userId = req.body.userId;
    var roleId = req.body.roleId;
    
    var user = await changeRoleUser(userId, roleId);
    console.log("blablsdbfldsf", user);
    res.send(user);
});

router.get('/', async (req, res,) => {
    if(res.locals.user && res.locals.user.roleId == 4){
        res.render('pages/admin', {
            css: ['admin'],
            user: res.locals.user,
            categories: await getAllCategories(),
            users: await getAllUser(),
        }); 
    }else{
        res.render('pages/admin', {
            css: ['admin'],
            user: null,
        }); 
    }
});

router.post('/look-up/category', async (req, res) => {
    var categoryId = req.body.categoryId;
    var category = await getCategoryById(categoryId);
    res.send(category);
});

router.post('/check/admin', async (req, res) => {
    var userName = req.body.userName;
    var passWord = req.body.passWord;
    res.clearCookie('token');
    const token = await AuthService.login(userName, passWord);
    console.log('token: ', token);
    if (token != null) {
        res.cookie('token', token, {httpOnly: true});
        res.send({code: '00'})
    } else {
        res.send({code: '01'});
    }
});

router.post('/look-up/user', async (req, res) => {
    var userId = req.body.userId;
    var user = await getUserById(userId);
    res.send(user);
});

router.post('/add/category', async (req, res) => {
    var categoryName = req.body.categoryName;
    var categoryLogo = req.body.categoryLogo;
    var categoryImg = req.body.categoryImg;
    var category = await createNewCategory(categoryName, categoryLogo, categoryImg);
    res.send(category);
});

router.post('/add/sub-category', async (req, res) => {
    var subCategoryName = req.body.subCategoryName;
    var categoryId = req.body.categoryId;
    var subCategory = await createNewSubCategory(subCategoryName, categoryId);
    res.send(subCategory);
});

router.post('/update/category', async (req, res) => {
    var categoryId = req.body.categoryId;
    var categoryName = req.body.name;
    var categoryLogo = req.body.logo;
    var result = await updateCategory(categoryId, categoryName, categoryLogo);
    if(result !== null) var category = await getCategoryById(categoryId);
    res.send(category);
})


module.exports = router;