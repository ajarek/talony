const mongoose = require('mongoose')
const Coupon = new mongoose.Schema({


    address: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    
})
module.exports = new mongoose.model('mycoupon', Coupon)