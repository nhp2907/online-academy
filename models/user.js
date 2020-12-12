const sequelize = require('./db')
const {DataTypes} = require('sequelize');
const Role = require('./role');
const Instructor = require('./instructor');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        notNull: true,
    },
    firstName: {
        type: DataTypes.STRING,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        field: 'email'
    },
    image: {
        type: DataTypes.STRING,
        field: 'image'
    },
    info: {
        type: DataTypes.STRING,
        field: 'info'
    },
    job: {
        type: DataTypes.STRING,
        field: 'job'
    },
    gender: {
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING(45)
    },
    password: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.DATE
    },
    street: {
        type: DataTypes.STRING,
        field: 'address_street'
    },
    district: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    roleId: {
        type: DataTypes.INTEGER,
        field: 'role_id',
        defaultValue: 3,
    }
}, {
    tableName: 'user',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date',
})

module.exports = User;

Role.hasMany(User, {as: 'users'});
User.belongsTo(Role, {as: "role", foreignKey: "roleId"});

User.hasOne(Instructor, {as: 'instructor'});
Instructor.belongsTo(User, {as: 'user', foreignKey: 'id'});
