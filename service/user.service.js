const { Op } = require('sequelize');
const Course = require('../models/course');
const User = require('../models/user');
const UserCourse = require('../models/user-course');
const Instructor = require('../models/instructor');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require('util')


async function updateBasicInfo(user) {
    const persistedUser = await User.findByPk(user.id);
    for (const [key, value] of Object.entries(user)) {
        persistedUser[key] = value;
    }
    const updatedUser = await persistedUser.save();
    return updatedUser.toJSON();
}

/**
 * Update password
 * @param userId
 * @param oldPass
 * @param newPass
 * @returns {Promise<void> return new token
 */
async function updatePassword(userId, oldPass, newPass) {
    const user = await User.findByPk(userId);
    if (bcrypt.compareSync(oldPass, user.password)) {
        const pHash = util.promisify(bcrypt.hash);
        const hashedPassword = await pHash(newPass, 10);
        // bcrypt.hash(newPass, 10, (err, hashedPassword) => {
        user.password = hashedPassword;
        console.log('update password new hashedPassword', hashedPassword);
        user.save().then((res) => console.log('update password successfully'));
        return jwt.sign({username: user.username}, process.env.JWT_SECRET_KEY);
        // })

    } else {
        console.log('wrong password')
        return null
    }
}

module.exports = {
    async findByEmail(email) {
        const user = await User.findOne({
                where: {
                    email
                }
            }
        )
        return user;
    },
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
    updateBasicInfo,
    updatePassword,
    async getAllInstructor() {
        const instructors = await User.findAll({
                attributes: ['id', 'firstName', 'lastName', 'image', 'job'],
                where: {
                    id: {
                        [Op.between]: [4, 10]
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