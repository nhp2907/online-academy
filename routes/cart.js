var express = require('express');
const { getCouponByCode } = require('../service/coupon.service');
var router = express.Router();

const { getUnPaymentInvoice, updateInvoice } = require("../service/invoice.service");

router.get('/', async (req, res) => {

    var userUnPaymentInvoice = await getUnPaymentInvoice(res.locals.user.id);

    if(userUnPaymentInvoice === null) {
        res.render('pages/cart', {
            css: ['cart'],
            code: '',
            message: 'cant not find cart of user'
        });
    }
    else {
        res.render('pages/cart', {
            css: ['cart'],
            code: '00',
            message: 'found user cart',
            userUnPaymentInvoice,
        });
    }
});

router.post('/check_coupon', async (req, res) => {

    var code = req.body.code;

    var coupon = await getCouponByCode(code);

    if(coupon !== null) res.send({coupon: coupon, code: '00', message: 'coupon exist'});
    else res.send({coupon: coupon, code: '01', message: 'coupon does not exist'});
});

router.post('/to_payment', async (req, res) => {

    var couponId = req.body.coupon;

    var updateResult = await updateInvoice(2, orderDate = null, refunddate = null, invoiceStatus = null, user = null, paymenttype = null, couponid = couponId);

    if(updateResult !== null) {     
        res.send({code: '00', paymentLink: 'http://localhost:5000/cart/payment'})
    }else{
        res.send({code: '01', message: 'oops, st goes wrong'})
    }
 
});

module.exports = router;

