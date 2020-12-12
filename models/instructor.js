const sequelize = require('./db')
const {DataTypes} = require('sequelize');
const User = require('./user');
const Course = require('./course');
const Role = require('./role');

const Instructor = sequelize.define('Instructor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        notNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    rating: {
        type: DataTypes.FLOAT,
        field: 'rating'
    },
    numReview: {
        type: DataTypes.INTEGER,
        field: 'num_review'
    },
    shortDescription: {
        type: DataTypes.FLOAT,
        field: 'short_description'
    },
    description: {
        type: DataTypes.FLOAT,
        field: 'description'
    },
    numCourse: {
        type: DataTypes.FLOAT,
        field: 'num_course'
    },
    contactUrl: {
        type: DataTypes.FLOAT,
        field: 'contact_url'
    },
    
}, {
    tableName: 'instructor',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date',
})

module.exports = Instructor;

Instructor.hasMany(Course, {as: 'courses'});
Course.belongsTo(Instructor, {as: "instructor", foreignKey: "instructorId"});

