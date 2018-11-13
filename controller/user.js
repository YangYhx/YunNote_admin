const {Router} = require('express')
const jwt = require('jsonwebtoken');

const router = Router();
const userModel = require('../database/model/user')

router.post('/user', async (req,res,next) => {      //添加用户
    try{
        const  { username,password,email} = req.body;
        const avatarNumber = Math.ceil(Math.random()*9);
        let avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`;
        if(password && password.length>= 5){
            const data = await userModel.create({username,password,email,avatar});
            res.json({
                code:200,
                msg:'注册成功'
            })
        }else {
            res.json({
                code:401,
                msg:'密码长度不符合要求,最少要5位'
            })
        }


    }catch (err){
        res.json({
            code:400,
            msg:'缺少必要参数'
        })
        next(err)
    }

});
router.post('/login',async (req,res) => {
    try {
        const { email,password } = req.body;
        console.log(email,password);
        const userdata = await userModel.findOne({email})
        console.log( userdata )
        if(!userdata){
            res.json({
                code:400,
                mag:'用户不存在'
            })
        }else {
            if( password && password == userdata.password){
                let token = jwt.sign({ _id: userdata._id }, 'select');
                req.session.user = userdata;
                res.json({
                    code:200,
                    token,
                    userdata,
                    msg:'登录成功',
                })
            }else {
                res.json({
                    code:400,
                    msg:'邮箱或者密码不正确'
                })
            }
        }
}catch (err) {
        res.json({
            code:400,
            msg:err
        })

    }
})
// router.post('/logout',(req,res) => {
//     if(req.session.user){
//         req.session.user = null;
//         res.json({
//             code:200,
//             msg:'退出登录成功'
//         })
//     }else {
//         res.json({
//             code:403,
//             mag:'用户未登录'
//         })
//     }
// })
router.get('/userdetail', async (req,res,next) => {
    try {
        let token = req.headers.token || req.body.token || req.query.token
        if(token){
            const decode = jwt.verify(token,'select')
            const data = await userModel.findById(decode._id).select("-password")
            res.json({
                code:200,
                data,
                msg:'获取成功'
            })
        }else {
            res.json({
                code:403,
                msg:'登录状态失效，请重新登录'
            })
        }
    }catch (err) {
        next(err)
    }
})
module.exports = router