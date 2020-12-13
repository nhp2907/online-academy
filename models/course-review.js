const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const CourseReview = sequelize.define('courseReview', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    content: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
}, {
    underscored: true,
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    tableName: 'course_review'
})

module.exports = CourseReview;