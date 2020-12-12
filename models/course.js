const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Course = sequelize.define('course', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    headline: DataTypes.STRING,
    image: DataTypes.STRING,
    concurrency: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    discount: DataTypes.INTEGER,
    language: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    numReview: DataTypes.FLOAT,
    numLecture:  DataTypes.FLOAT,
    numStudentEnroll: DataTypes.INTEGER,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
}, {
    underscored: true,
    tableName: 'course',
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate'
})

module.exports = Course;

CategoryLink.hasMany(Course, {as: 'courses'});
Course.belongsTo(CategoryLink, {as: "categoryLink", foreignKey: 'categoryLinkId'});

Level.hasMany(Course, {as: 'courses'});
Course.belongsTo(Level, {as: "level", foreignKey: "levelId"});

Advancement.hasMany(Course, {as: 'courses'});
Course.belongsTo(Advancement, {as: "advancement", foreignKey: "advancementId"});

