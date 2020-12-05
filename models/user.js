const sequelize = require('./db')
const {DataTypes} = require('sequelize')

sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'user'
})

module.exports = {
    findAll() {

    },
    findById(id) {

    },
    findByCriteria(criteria) {

    },
    /**
     * Save or update user
     * @param user
     */
    save(user) {

    }
}