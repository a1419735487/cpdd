const express = require('express');
const app  = express();

const mongoose = require('mongoose')
const db = require("./config/keys").mongonURI;
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser')

// ...省略已有代码
// 使用 body-parser 中间件
app.use(bodyParser.urlencoded({limit:'100mb', extended: true}))
app.use(bodyParser.json({limit:'100mb'}))

const users = require('./routers/api/users')
app.use('/api/users',users)
const profiles = require('./routers/api/profiles')
app.use('/api/profiles',profiles)

const passport = require('passport')
app.use(passport.initialize())
require('./config/passport')(passport)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true },
    function(err){
        if(err){
            console.log('连接失败');
        }else{
            console.log('连接成功');
        }
    }
)