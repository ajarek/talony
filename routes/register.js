const router = require('express').Router()
const Coupon = require('../models/Coupon')
const mysort = {address:-1}

router.get('/',async(req,res)=>{
    const allCoupons=await Coupon.find({}).sort(mysort)
    res.render('register',{coupons:allCoupons})
})
.get('/delete/:id',async(req,res)=>{
    const{id}=req.params
    try{
      await Coupon.deleteOne({_id:id}) 
      console.log('Deleted coupon successfully!')
      res.redirect("/")
    }
     catch(err){
     console.log(err)
    }
})
.post('/search',async(req,res)=>{
  const payload = req.body.address
  const allCoupons= await Coupon.find({address:{'$regex': '^'+payload, $options: 'i'}}).sort(mysort)
  res.render('search',{coupons:allCoupons})
})
module.exports=router