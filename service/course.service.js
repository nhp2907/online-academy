const Advancement = require('../models/advancement');
const Course = require('../models/course');
const Instructor = require('../models/instructor');
const User = require('../models/user');
const { Op } = require("sequelize");

module.exports = {
    async getTopCoursesInWeek() {
        try{
            const topCoursesInWeek = await Course.findAll({
                attributes: ['id','name','headline', 'image','price', 'discount','prePrice', 'language','rating', 'numReview', 'numLecture','numStudentEnroll','estimateContentLength','updated_date'],
                limit: 10,
                where: {
                    updated_date: {
                        [Op.gt]: new Date(new Date() - 1000 * 24 * 60 * 3600)
                    }
                },
                order: [
                    ['discount','DESC'],
                    ['rating','DESC']
                ],
                include: [{
                    model: Instructor,
                    as: 'instructor',
                    attributes: ['id'],
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'firstName','lastName']
                    }
                },
                {
                    model: Advancement,
                    as: 'advancement',
                    attributes: ['id','description'],
                    where:{
                        description:{
                            [Op.substring]: '%BestSeller%'
                        }
                    }
                }]
            });
            console.log("blablablabla",topCoursesInWeek.map(course => course.toJSON()));
            return topCoursesInWeek.map(course => course.toJSON());
        }
        catch(err){
            throw err;
        }
    },
    async getNewestCourses() {
        try{
            const newestCourses = await Course.findAll({
                attributes: ['id','name','headline', 'image','price', 'discount','prePrice', 'language','rating', 'numReview', 'numLecture','numStudentEnroll','estimateContentLength','updated_date'],
                limit: 10,
                order: [
                    ['created_date','DESC']
                ],
                include: [{
                    model: Instructor,
                    as: 'instructor',
                    attributes: ['id'],
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'firstName','lastName']
                    }
                },
                {
                    model: Advancement,
                    as: 'advancement',
                    attributes: ['id','description'],
                }]
            });
            return newestCourses.map(course => course.toJSON());
        }
        catch(err){
            throw err;
        }
    },
    async getMostEnrollCourses() {
        try{
            const mostEnrollCourses = await Course.findAll({
                attributes: ['id','name','headline', 'image','price', 'discount','prePrice', 'language','rating', 'numReview', 'numLecture','numStudentEnroll','estimateContentLength','updated_date'],
                limit: 10,
                order: [
                    ['numStudentEnroll','DESC']
                ],
                include: [{
                    model: Instructor,
                    as: 'instructor',
                    attributes: ['id'],
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['id', 'firstName','lastName']
                    }
                },
                {
                    model: Advancement,
                    as: 'advancement',
                    attributes: ['id','description'],
                }]
            });
            return mostEnrollCourses.map(course => course.toJSON());
        }
        catch(err){
            throw err;
        }
    }
}