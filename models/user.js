const sequelize = require('./db')
const {DataTypes} = require('sequelize')

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
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.INTEGER
    },
    birthday: {
        type: DataTypes.DATE
    },
    street: {
        type: DataTypes.INTEGER,
        field: 'address_street'
    },
    district: {
        type: DataTypes.INTEGER
    },
    city: {
        type: DataTypes.INTEGER
    },
    country: {
        type: DataTypes.INTEGER
    },
    roleId: {
        type: DataTypes.INTEGER,
        field: 'role_id'
    }
}, {
    tableName: 'user',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date',
})


module.exports = User;