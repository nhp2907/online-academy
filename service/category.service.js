const { Op } = require('sequelize');
const Category = require('../models/category');
const CategoryLink = require('../models/category-link');
const Course = require('../models/course');
const SubCategory = require('../models/sub-category');

module.exports = {
    async getAllCategories() {
        try{
            const categories = await Category.findAll({
                attributes: ['id','name','logo'],
                include: {
                    model: SubCategory,
                    as: 'subCategories',
                    attributes: ['id','name'],
                    through: {
                        attributes: []
                    },
                }
            });
            return categories.map(category => category.toJSON());
        }
        catch(err){
            throw err;
        }
    },
    async getMostEnrollCategories() {
        try{
            const mostEnrollCategories = await SubCategory.findAll({
                attributes: ['id','name'],
                limit: 10,
                through: {
                    attributes: ['id'],
                    include: {
                        model: Course,
                        as: 'courses',
                        attributes: [],
                        order: [
                            ['numStudentEnroll','DESC']
                        ]
                    }
                }
            });
            return mostEnrollCategories.map(category => category.toJSON());
        }
        catch(err){
            throw err;
        }
    }
}