const express = require("express");
const router = express.Router();
const passport = require('passport')
const Profile = require('../../models/Profile')
const Token = require('../../models/Token')

router.post("/add",passport.authenticate('jwt',{session:false}),(req,res)=>{
    const profileFields = {};
    if(req.body.Time) profileFields.Time =  req.body.Time;
    if(req.body.Type) profileFields.Type =  req.body.Type;
    if(req.body.Title) profileFields.Title =  req.body.Title;
    if(req.body.Text) profileFields.Text =  req.body.Text;
    if(req.body.filename) profileFields.filename =  req.body.filename;
    if(req.body.filesize) profileFields.filesize =  req.body.filesize;
    if(req.body.base64) profileFields.base64 =  req.body.base64;

    new Profile(profileFields).save().then(profile=>{
        res.json(profile)
    })
})

// 获取所有信息
router.get('/',(req,res)=>{
    Profile.find().then(profile=>{
        if (!profile) {
            return res.status(404).json('没有内容') 
        }
        res.json(profile)
    }).catch(err=>{
        res.status(404).json(err) 
    })
})

// 获取分类信息
router.get('/:Type',(req,res)=>{
    Profile.find({Type:req.params.Type}).then(profile=>{
        if (!profile) {
            return res.status(404).json('没有内容') 
        }
        res.json(profile)
    }).catch(err=>{
        res.status(404).json(err) 
    })
})

// 搜索文章
router.get('/search/:Title',(req,res)=>{
    var query = req.query.Title,
    Title = new RegExp(query, 'i');
    Profile.find({Title}).then(profile=>{
        if (!profile) {
            return res.status(404).json('没有内容') 
        }
        res.json(profile)
    }).catch(err=>{
        res.status(404).json(err) 
    })
})

// 获取单个内容
router.get('/one/:id',(req,res)=>{
    Profile.findOne({_id:req.params.id}).then(profile=>{
        if (!profile) {
            return res.status(404).json('没有内容') 
        }
        res.json(profile)
    }).catch(err=>{
        res.status(404).json(err) 
    })
})

//获取上一条内容
router.get('/last/:id',(req,res)=>{
    Profile.findOne({'_id': { '$lt': req.params.id }}).sort({ _id: -1 }).then(profile=>{
        if (!profile) {
            return res.status(404).json('没有内容') 
        }
        res.json(profile)
    }).catch(err=>{
        res.status(404).json(err)
    })
})

//获取下一条内容
router.get('/next/:id',(req,res)=>{
    Profile.findOne({'_id': { '$gt': req.params.id }}).then(profile=>{
        if (!profile) {
            return res.status(404).json('没有内容') 
        }
        res.json(profile)
    }).catch(err=>{
        res.status(404).json(err) 
    })
})

// 编辑
router.post("/edit/:id",passport.authenticate('jwt',{session:false}),(req,res)=>{
    const profileFields = {};
    if(req.body.Time) profileFields.Time =  req.body.Time;
    if(req.body.Type) profileFields.Type =  req.body.Type;
    if(req.body.Title) profileFields.Title =  req.body.Title;
    if(req.body.Text) profileFields.Text =  req.body.Text;
    if(req.body.filename) profileFields.filename =  req.body.filename;
    if(req.body.filesize) profileFields.filesize =  req.body.filesize;
    if(req.body.base64) profileFields.base64 =  req.body.base64;

    Profile.findByIdAndUpdate(
        {_id:req.params.id},
        {$set:profileFields},
        {new:true})
    .then(profile=>{
        res.json(profile)
    })
})

//删除
router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Profile.deleteOne({_id:req.params.id}).then(profile=>{
        profile.save().then(profile=>res.json(profile))
    }).catch( err => res.status(402).json('删除失败'))
})

//检测token是否过期
// 获取所有信息
router.post('/token',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Token.find().then(token=>{
        if (!token) {
            return res.status(404).json('没有内容') 
        }
        res.json(token)
    }).catch(err=>{
        res.status(404).json(err) 
    })
})
module.exports = router;