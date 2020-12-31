const Instructor = require("./instructor");
const User = require("./user");
const Course = require("./course");
const CourseChapter = require("./course-chapter");
const CourseChapterSection = require("./course-chapter-section");
const CategoryLink = require("./category-link");
const Level = require("./level");
const Advancement = require("./advancement");
const SubCategory = require("./sub-category");
const Category = require("./category");
const CourseReview = require("./course-review");

Instructor.hasOne(User, {
    as: 'basicInfo',
    foreignKey: 'id',
});

// one to many - one Instructor has many Course
Course.belongsTo(Instructor);
Instructor.hasMany(Course);

Course.hasMany(CourseChapter, {as: 'chapters'});
CourseChapter.hasMany(CourseChapterSection, {foreignKey: 'chapter_id',as: 'sections'});

CategoryLink.hasMany(Course, {as: 'courses'});
Course.belongsTo(CategoryLink, {as: "categoryLink", foreignKey: 'categoryLinkId'});

Level.hasMany(Course, {as: 'courses'});
Course.belongsTo(Level, {as: "level", foreignKey: "levelId"});

Advancement.hasMany(Course, {as: 'courses'});
Course.belongsTo(Advancement, {as: "advancement", foreignKey: "advancementId"});

Course.hasMany(CourseReview, {
    as: 'reviews'
});

SubCategory.belongsToMany(Category, {through: CategoryLink,as: 'categories', foreignKey: 'subCategoryId'});
Category.belongsToMany(SubCategory, {through: CategoryLink,as: 'subCategories', foreignKey: 'categoryId'});

Category.hasMany(CategoryLink, {as: 'categoryLinks'});
CategoryLink.belongsTo(Category, {as: 'category', foreignKey: 'categoryId'});
SubCategory.hasMany(CategoryLink,{as: 'categoryLinks'});
CategoryLink.belongsTo(SubCategory, {as: 'subCategory', foreignKey: 'subCategoryId'});
