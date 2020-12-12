const sequelize = require('./db')
const {DataTypes} = require('sequelize');
const CategoryLink = require('./category-link');
const Level = require('./level');
const Advancement = require('./advancement');
const Instructor = require('./instructor');

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
    },
    name: {
        type: DataTypes.STRING,
        field: 'name'
    },
    headline: {
        type: DataTypes.STRING,
        field: 'headline'
    },
    image: {
        type: DataTypes.STRING,
        field: 'image'
    },
    concurrency: {
        type: DataTypes.STRING,
        field: 'concurrency'
    },
    price: {
        type: DataTypes.FLOAT,
        field: 'price'
    },
    discount: {
        type: DataTypes.INTEGER,
        field: 'discount'
    },
    prePrice: {
        type: DataTypes.FLOAT,
        field: 'pre_price'
    },
    language: {
        type: DataTypes.STRING,
        field: 'language'
    },
    rating: {
        type: DataTypes.FLOAT,
        field: 'rating'
    },
    numReview: {
        type: DataTypes.INTEGER,
        field: 'num_review'
    },
    numLecture: {
        type: DataTypes.INTEGER,
        field: 'num_lecture'
    },
    estimateContentLength: {
        type: DataTypes.INTEGER,
        field: 'estimate_content_length'
    },
    numStudentEnroll: {
        type: DataTypes.STRING,
        field: 'num_student_enroll'
    },
    categoryLinkId: {
        type: DataTypes.INTEGER,
        field: 'category_link_id',
        notNull: true,
        references: {
            model: CategoryLink,
            key: 'id'
        }
    },
    levelId: {
        type: DataTypes.INTEGER,
        field: 'level_id',
        notNull: true,
        references: {
            model: Level,
            key: 'id'
        }
    },
    advancementId: {
        type: DataTypes.INTEGER,
        field: 'advancement_id',
        notNull: true,
        references: {
            model: Advancement,
            key: 'id'
        }
    },
    instructorId: {
        type: DataTypes.INTEGER,
        field: 'instructor_id',
        notNull: true,
        references: {
            model: Instructor,
            key: 'id'
        }
    },
}, {
    tableName: 'course',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date',
})

module.exports = Course;

CategoryLink.hasMany(Course, {as: 'courses'});
Course.belongsTo(CategoryLink, {as: "categoryLink", foreignKey: 'categoryLinkId'});

Level.hasMany(Course, {as: 'courses'});
Course.belongsTo(Level, {as: "level", foreignKey: "levelId"});

Advancement.hasMany(Course, {as: 'courses'});
Course.belongsTo(Advancement, {as: "advancement", foreignKey: "advancementId"});

