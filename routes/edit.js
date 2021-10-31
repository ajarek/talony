const router = require('express').Router()

const Coupon = require('../models/Coupon')


router.get('/edit/:id',async(req,res)=>{
    const{id}=req.params
    const getData =await Coupon.findOne({_id:id}) 
    res.render('edit',{coupons:getData})
})
.post('/edit/:id',(req,res)=>{
    const{id}=req.params
    const {address,desc}=req.body
    Coupon.updateOne({_id:id},{address,desc})
    .then(()=>{
        console.log('successfuly! updated the note!')
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})

module.exports=router