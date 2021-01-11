const Course = require('../models/course');
const CourseChapter = require("../models/course-chapter");
const Instructor = require("../models/instructor");
const User = require("../models/user");
const CourseReview = require("../models/course-review");
const CourseChapterSection = require("../models/course-chapter-section");
const Advancement = require("../models/advancement");
const {Op} = require('sequelize');
const CategoryLink = require('../models/category-link');
const Level = require('../models/level');
const SubCategory = require('../models/sub-category');
const Category = require('../models/category');

const save = async (course) => {
    const savedCourse = await Course.create(course);
    return savedCourse.toJSON();
}

const update = async (course) => {
    const savedCourse = await Course.findByPk(course.id);

    for (const [key, value] of Object.entries(course)) {
        savedCourse[key] = value;
    }
    const updatedCourse = await savedCourse.save();
    return updatedCourse.toJSON();

}

const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = 0 + (page - 1) * limit;
    return {limit, offset};
};

const getPagingData = (data, page, limit) => {
    const {count: totalItems} = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return {totalItems, totalPages, currentPage};
};

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
        }, {
            model: CategoryLink,
            as: 'categoryLink'
        }]
    });
    console.log(course);
    const st = course.toJSON();
    console.log(st)
    return st;
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

const getMostRatingCourses = async () => {
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

const getCategoryCourses = async (categoryid, page, size, duration, rating, level, price, order, topic) => {
    try {
        const {limit, offset} = getPagination(page, size);
        console.log(categoryid);
        const categoryCourses = await Course.findAndCountAll({
            attributes: ['id', 'name', 'headline', 'image', 'price', 'rating', 'numReview', 'numLecture', 'numStudentEnroll', 'estimateContentLength'],
            limit,
            offset,
            where: {
                rating: {
                    [Op.gte]: rating
                },
                estimateContentLength: {
                    [Op.between]: [duration[0], duration[1]]
                },
                price: {
                    [Op.between]: [price[0], price[1]]
                },
            },
            order: [
                order == 'price-low-to-high' ? ['price', 'ASC'] :
                    order == 'price-high-to-low' ? ['price', 'DESC'] :
                        order == 'top-rating' ? ['rating', 'DESC'] :
                            order == 'top-enrolled' ? ['numStudentEnroll', 'DESC'] :
                                order == 'top-newest' ? ['createdDate', 'DESC'] : ['numStudentEnroll', 'DESC']
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
                },
                {
                    model: CategoryLink,
                    as: 'categoryLink',
                    attributes: ['id'],
                    where: {
                        categoryId: categoryid
                    },
                    include: {
                        model: SubCategory,
                        as: 'subCategory',
                        attributes: [],
                        where: {
                            name: {
                                [Op.like]: topic == '' ? '%%' : topic
                            }
                        }
                    }
                },
                {
                    model: Level,
                    as: 'level',
                    attributes: ['id', 'description'],
                    where: {
                        id: {
                            [Op.in]: level
                        }
                    }
                }]
        });
        const categorycourses = categoryCourses.rows.map(course => course.toJSON());
        const pageCount = getPagingData(categoryCourses, page, limit);
        return {pageCount, categorycourses};
    } catch (err) {
        throw err;
    }
}

const getPopularCategoryCourses = async (categoryid) => {
    try {
        const popularCatetogyCourses = await Course.findAll({
            attributes: ['id', 'name', 'headline', 'image', 'price', 'prePrice', 'rating', 'numReview', 'numLecture', 'numStudentEnroll', 'estimateContentLength'],
            order: [
                ['numStudentEnroll', 'DESC'],
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
                },
                {
                    model: CategoryLink,
                    as: 'categoryLink',
                    attributes: ['id'],
                    where: {
                        categoryId: categoryid
                    }
                },
                {
                    model: Level,
                    as: 'level',
                    attributes: ['id', 'description'],
                    where: {
                        id: {
                            [Op.or]: [1, 2]
                        }
                    }
                }]
        });
        console.log()
        return popularCatetogyCourses.map(course => course.toJSON()).slice(0, 10);
    } catch (err) {
        throw err;
    }
}

const getAllLevel = async () => {
    const levels = await Level.findAll();
    return levels.map(l => l.toJSON());
}

const findByInstructorId = async (instructorId) => {
    const courses = await Course.findAll({
        where: {
            instructorId
        }
    })
    const st = courses.map(c => c.toJSON());

    console.log(st);

    return st;
}

module.exports = {
    save,
    update,
    findById,
    findAll,
    search, getTopCoursesInWeek,
    getNewestCourses,
    getMostEnrollCourses,
    getCategoryCourses,
    getPopularCategoryCourses,
    getAllLevel,
    findByInstructorId,
}