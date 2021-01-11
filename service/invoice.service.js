const { Op } = require('sequelize');
const Coupon = require('../models/coupon');
const Course = require('../models/course');
const Instructor = require('../models/instructor');
const Invoice = require('../models/invoice');
const InvoiceStatus = require('../models/invoice-status');
const PaymentType = require('../models/payment-type');
const User = require('../models/user');

module.exports = {
    async getUnPaymentInvoice(userid) {
        const invoice = await Invoice.findOne({
            attributes: ['id','totalPrice'],
            include:[{
                model: Course,
                attributes: ['id','image','price','prePrice','name'],
                include:{
                    model: Instructor,
                    as: 'instructor',
                    attributes: ['id'],
                    include: {
                        model: User,
                        as: 'basicInfo',
                        attributes: ['id', 'firstName', 'lastName']
                    }
                }
            },{
                model: Coupon,
                attributes: ['id','name','percentDiscount','amountDiscount','endDate'],
                where: {}
            },{
                model: PaymentType,
                attributes: [],
                where: {
                    id: 8
                }
            },{
                model: User,
                attributes: [],
                where: {
                    id: userid
                }
            },{
                model: InvoiceStatus,
                attributes: [],
                where: {
                    id: 1
                }
            }]
            }
        )
        if(invoice === null) return null;
        return invoice.toJSON();
    },

    async updateInvoice(invoiceid, orderdate, refunddate, invoicestatus, user, paymenttype, coupon) {
        var updateParams = {};
        console.log(invoiceid, coupon);
        if(orderdate !== null) updateParams['orderDate'] = orderdate;
        if(refunddate !== null) updateParams['refundDate'] = refunddate;
        if(invoicestatus !== null) updateParams['invoiceStatusId'] = invoicestatus;
        if(user !== null) updateParams['userId'] = user;
        if(paymenttype !== null) updateParams['paymentTypeId'] = paymenttype;
        if(coupon !== null) updateParams['couponId'] = coupon;
        console.log(updateParams);
        const updateResult = await Invoice.update(
            updateParams,
            { 
                where: { 
                    id: invoiceid
                } 
            }
        );
        console.log(updateResult);
        if(updateResult === null) return null;
        return updateResult;
    },
}