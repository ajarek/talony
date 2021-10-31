const router = require('express').Router()
const List = require('../models/Coupon')

router.get('/compose',(req,res)=>{
    res.render('composeRegister')
})
.post('/compose',(req,res)=>{
    const{address,desc}=req.body
    if(!address || !desc )
     return res.send('Plese enter the required credetnials!')
    
     const newList =new List({address,desc})
     newList.save()
     .then(()=>{
         console.log('Record Saved Successfully!')
         res.redirect('/')
     })
     .catch(err=>console.log('err'))
})
module.exports=router