const Course = require('../models/course');
const CourseChapter = require("../models/course-chapter");
const Instructor = require("../models/instructor");
const User = require("../models/user");
const CourseReview = require("../models/course-review");
const CourseChapterSection = require("../models/course-chapter-section");
const Advancement = require("../models/advancement");
const {Op} = require('sequelize');

const findAll = async () => {
    const courses = await Course.findAll({
        include: [{
            model: CourseChapter,
            as: 'chapters',
            include: {
                model: CourseChapterSection,
                as: 'sections'
            }
        }, {
            model: Instructor,
            as: 'instructor',
            include: {
                model: User,
                as: 'basicInfo'
            }
        }, {
            model: CourseReview,
            as: 'reviews'
        }]
    });
    return courses.map(c => c.toJSON());
}
const findById = async (id) => {
    const course = await Course.findOne({
        where: {
            id
        },
        include: [{
            model: CourseChapter,
            as: 'chapters',
            include: {
                model: CourseChapterSection,
                as: 'sections'
            }
        }, {
            model: Instructor,
            as: 'instructor',
            include: {
                model: User,
                as: 'basicInfo'
            }
        }, {
            model: CourseReview,
            as: 'reviews'
        }]
    });
    return course.toJSON();
}

const findByCategory = (category) => {
    return [];
}
const findByAuthor = (author) => {
    return [];
}
const search = (criteria) => {
    return [];
}

const getTopCoursesInWeek = async () => {
    try {
        const topCoursesInWeek = await Course.findAll({
            attributes: ['id', 'name', 'headline', 'image', 'price', 'discount', 'prePrice', 'language', 'rating', 'numReview', 'numLecture', 'numStudentEnroll', 'estimateContentLength', 'updated_date'],
            limit: 10,
            where: {
                updatedDate: {
                    [Op.gt]: new Date(new Date() - 1000 * 24 * 60 * 3600)
                }
            },
            order: [
                ['discount', 'DESC'],
                ['rating', 'DESC']
            ],
            include: [{
                model: Instructor,
                as: 'instructor',
                attributes: ['id'],
                include: {
                    model: User,
                    as: 'basicInfo',
                    attributes: ['id', 'firstName', 'lastName']
                }
            },
                {
                    model: Advancement,
                    as: 'advancement',
                    attributes: ['id', 'description'],
                    where: {
                        description: {
                            [Op.substring]: '%BestSeller%'
                        }
                    }
                }]
        });
        console.log("blablablabla", topCoursesInWeek.map(course => course.toJSON()));
        return topCoursesInWeek.map(course => course.toJSON());
    } catch (err) {
        throw err;
    }
}
const getNewestCourses = async () => {
    try {
        const newestCourses = await Course.findAll({
            attributes: ['id', 'name', 'headline', 'image', 'price', 'discount', 'prePrice', 'language', 'rating', 'numReview', 'numLecture', 'numStudentEnroll', 'estimateContentLength', 'updated_date'],
            limit: 10,
            order: [
                ['created_date', 'DESC']
            ],
            include: [{
                model: Instructor,
                as: 'instructor',
                attributes: ['id'],
                include: {
                    model: User,
                    as: 'basicInfo',
                    attributes: ['id', 'firstName', 'lastName']
                }
            },
                {
                    model: Advancement,
                    as: 'advancement',
                    attributes: ['id', 'description'],
                }]
        });
        return newestCourses.map(course => course.toJSON());
    } catch (err) {
        throw err;
    }
}
const getMostEnrollCourses = async () => {
    try {
        const mostEnrollCourses = await Course.findAll({
            attributes: ['id', 'name', 'headline', 'image', 'price', 'discount', 'prePrice', 'language', 'rating', 'numReview', 'numLecture', 'numStudentEnroll', 'estimateContentLength', 'updated_date'],
            limit: 10,
            order: [
                ['numStudentEnroll', 'DESC']
            ],
            include: [{
                model: Instructor,
                as: 'instructor',
                attributes: ['id'],
                include: {
                    model: User,
                    as: 'basicInfo',
                    attributes: ['id', 'firstName', 'lastName']
                }
            },
                {
                    model: Advancement,
                    as: 'advancement',
                    attributes: ['id', 'description'],
                }]
        });
        return mostEnrollCourses.map(course => course.toJSON());
    } catch (err) {
        throw err;
    }
}
module.exports = {
    findById,
    findAll,
    search, getTopCoursesInWeek,
    getNewestCourses,
    getMostEnrollCourses,
}