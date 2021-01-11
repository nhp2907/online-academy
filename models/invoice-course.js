const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const InvoiceCourse = sequelize.define('invoiceCourse', {
    id : {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'invoice_course',
    underscored:true,
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate'
})

module.exports = InvoiceCourse;
