const Instructor = require("./instructor");
const User = require("./user");
const Course = require("./course");
const CourseChapter = require("./course-chapter");
const CourseChapterSection = require("./course-chapter-section");
const CategoryLink = require("./category-link");
const Level = require("./level");
const Advancement = require("./advancement");

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

CategoryLink.hasMany(Course, {as: 'courses'});
Course.belongsTo(CategoryLink, {as: "categoryLink", foreignKey: 'categoryLinkId'});

Level.hasMany(Course, {as: 'courses'});
Course.belongsTo(Level, {as: "level", foreignKey: "levelId"});

Advancement.hasMany(Course, {as: 'courses'});
Course.belongsTo(Advancement, {as: "advancement", foreignKey: "advancementId"});

Instructor.hasMany(Course, {as: 'courses'});
// Course.belongsTo(Instructor, {as: "instructor", foreignKey: "instructorId"});
Course.hasMany(CourseReview, {
    as: 'reviews'
});
