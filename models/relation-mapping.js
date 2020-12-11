const Instructor = require("./instructor");
const User = require("./user");
const Course = require("./course");
const CourseChapter = require("./course-chapter");
const CourseChapterSection = require("./course-chapter-section");

Instructor.hasOne(User , {
    as: 'basicInfo',
    foreignKey: 'id',
});
Course.belongsTo(Instructor);
Course.hasMany(CourseChapter, {
    as: 'chapters'
});
CourseChapter.hasMany(CourseChapterSection, {
    foreignKey: 'chapter_id',
    as: 'sections'
});

