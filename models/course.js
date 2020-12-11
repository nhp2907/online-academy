const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Course = sequelize.define('course', {
    int: DataTypes.INTEGER,
    name: DataTypes.STRING,
    headline: DataTypes.STRING,
    image: DataTypes.STRING,
    concurrency: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    discount: DataTypes.INTEGER,
    language: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    numberOfReview: {
        type: DataTypes.FLOAT,
        field: 'num_review'
    },
    numOfLecture: {
        type: DataTypes.FLOAT,
        field: 'num_lecture'
    },
    numOfStudentEnroll: {
        type: DataTypes.INTEGER,
        field: 'num_student_enroll'
    }
}, {
    tableName: 'course',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date'
})

module.exports = Course;