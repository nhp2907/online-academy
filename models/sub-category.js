const sequelize = require('./db')
const {DataTypes} = require('sequelize');

const SubCategory = sequelize.define('SubCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
    },
    name: {
        type: DataTypes.STRING,
        field: 'name'
    }
}, {
    tableName: 'sub_category',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date',
})



module.exports = SubCategory;