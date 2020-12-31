const { Op } = require('sequelize');
const Instructor = require('../models/instructor');
const User = require('../models/user')

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

}