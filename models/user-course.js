const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const UserCourse = sequelize.define('userCourse', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
}, {
    underscored: true,
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    tableName: 'user_course'
})

module.exports = UserCourse;