const { Op } = require('sequelize');
const Course = require('../models/course');
const Instructor = require('../models/instructor');
const User = require('../models/user');
const UserCourse = require('../models/user-course');

module.exports = {
    async findByUsername(username) {
        const user = await User.findOne({
                where: {
                    username
                }
            }
        )
        return user;
    },
    async save(user) {
        const savedUser = await User.build({...user}).save();
        return savedUser;
    },

    async getAllInstructor() {
        const instructors = await User.findAll({
            attributes: ['id','firstName','lastName','image','job'],
            where: {
                id: {
                    [Op.between] : [4, 10]
                }
            }
            }
        )
        return instructors.map(instructor => instructor.toJSON());
    },
    async save(user) {
        const savedUser = await User.build({...user}).save();
        return savedUser;
    },

    async getById(userid){
        const instructor = await User.findOne({
            attributes: ['id','image','firstName','lastName'],
            where: {
                id: userid
            }
        });
        return instructor.toJSON();
    },

    async getAllUserCourses(userid){
        const userCourses = await Course.findAll({
            attributes: ['id','name','rating','image'],
            include:[{
                model: UserCourse,
                where: {
                    user_id: userid
                },
            },{
                model: Instructor,
                as: 'instructor',
                attributes: ['id'],
                include: {
                    model: User,
                    as: 'basicInfo',
                    attributes: ['id', 'firstName', 'lastName']
                }
            }]
        });
        return userCourses.map(userCourse => userCourse.toJSON());
    }
}