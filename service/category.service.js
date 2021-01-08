const { Op, Sequelize } = require('sequelize');
const Category = require('../models/category');
const CategoryLink = require('../models/category-link');
const Course = require('../models/course');
const sequelize = require('../models/db');
const SubCategory = require('../models/sub-category');

module.exports = {

    async getAllCategories() {
        try{
            const categories = await Category.findAll({
                attributes: ['id','name','logo','image'],
                include: {
                    model: SubCategory,
                    as: 'subCategories',
                    attributes: ['id','name']
                },
            });
            return categories.map(category => category.toJSON());
        }
        catch(err){
            throw err;
        }
    },

    async getSubCategoriesByCategory(categoryid) {
        try{
            const categories = await Category.findAll({
                attributes: ['id','name','logo','image'],
                where: {
                    id : categoryid
                },
                limit: 1,
                include: {
                    model: SubCategory,
                    as: 'subCategories',
                    attributes: ['id','name']
                },
            });
            return categories.map(category => category.toJSON());
        }
        catch(err){
            throw err;
        }
    },
    async getMostEnrollCategories() {
        try{
            const mostEnrollCategories = await CategoryLink.findAll({
                attributes: [
                    [Sequelize.col('subCategory.name'), 'subName'],
                    [Sequelize.fn('sum', Sequelize.col('courses.num_student_enroll')), 'total'],
                ],
                group: [[sequelize.literal('subName')]],
                order: [[sequelize.literal('total'), 'DESC']],
                include: [{
                    model: Course,
                    as: 'courses',
                    attributes: [],
                },{
                    model: SubCategory,
                    as: 'subCategory',
                    attributes: [],
                },{
                    model: Category,
                    as: 'category',
                    attributes: ['id','name'],
                }]
            });
            console.log(mostEnrollCategories.map(category => category.toJSON()).slice(0, 10));
            return mostEnrollCategories.map(category => category.toJSON()).slice(0, 10);
        }
        catch(err){
            throw err;
        }
    },
    async getPopularSubCategoriesByCategory(categoryid) {
        try{
            const popularSubcategoriesByCategory = await CategoryLink.findAll({
                attributes: [
                    [Sequelize.col('subCategory.name'), 'subName'],
                    [Sequelize.fn('sum', Sequelize.col('courses.num_student_enroll')), 'total']
                ],
                group: [[sequelize.literal('subName')]],
                order: [[sequelize.literal('total'), 'DESC']],
                where: {
                    categoryId: {
                        [Op.eq]: categoryid
                    }
                },
                include: [{
                    model: Course,
                    as: 'courses',
                    attributes: [],
                },{
                    model: SubCategory,
                    as: 'subCategory',
                    attributes: [],
                }]
            });
            return popularSubcategoriesByCategory.map(category => category.toJSON()).slice(0, 6);
        }
        catch(err){
            throw err;
        }
    }

}