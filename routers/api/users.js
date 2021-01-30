const express = require("express");

const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./../../models/User')
const keys = require('./../../config/keys')
const passport = require('passport')

// router.post('/register',(req,res)=>{
//     console.log(req.body);
//     User.findOne({name:req.body.name}).then(user =>{
//         if (user) {
//             return res.status(400).json({name:"该用户已经被注册"})
//         }else{
//             const newUser = new User({
//                 name:req.body.name,
//                 password:req.body.password
//             })
//              // 加密密码
//             bcrypt.genSalt(10,(err,salt)=>{
//             bcrypt.hash(newUser.password,salt,(err,hash)=>{
//                     if(err) throw err;
//                     newUser.password = hash;
//                     newUser.save()
//                     .then(user=>res.json(user))
//                     .catch(err=>console.log(err));
//                 })
//             })
//         }
//     })
// })

// 登录接口
router.post('/login',(req,res)=>{
    const {name,password} = req.body;
    // 查询数据库
    User.findOne({name}).then(user=>{
        if (!user) {
            return res.status(400).json({name:"error"})
        }
        // 密码匹配
        bcrypt.compare(password,user.password).then(isMatch=>{
            if (isMatch) {
                // 加密规则 加密名字 过期时间 回调
                const rule = {id:user._id,name:user.name}
                jwt.sign(rule,keys.secretOrKey,{expiresIn:3*24*3600},(err,token)=>{
                    if (err) {
                        throw err
                    }
                    res.json({
                        success:true,
                        token:'Bearer '+token
                    })
                })
            }else{
                return  res.status(400).json({msg:'error'})
            }
        })
    })
})

//jwt验证token
router.get('/current',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name
    })
})
module.exports = router;