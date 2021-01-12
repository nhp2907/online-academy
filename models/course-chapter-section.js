const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const CourseChapterSection = sequelize.define('course', {
    id : {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    courseChapterId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    urlVideo: DataTypes.STRING,
    length: DataTypes.STRING,
    canBePreview: DataTypes.TINYINT,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
}, {
    tableName: 'course_chapter_section',
    underscored: true,
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt : 'updatedDate'
});

module.exports = CourseChapterSection;