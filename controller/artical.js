const {Router} = require('express')

const router = Router();
const articalModel = require('../database/model/artical')

router.post('/artical',(req,res) => {
    if(req.session.user){
        const {title,contentText,category,content} = req.body
        let author = req.session.user.username;
        let avatar = req.session.user.avatar;
        articalModel.create({title,contentText,category,content,author,avatar}).then( data => {
            res.json({
                code:200,
                data,
                mag:'上传成功'
            })
        })
    }else {
        res.json({
            code:403,
            msg:'登录状态失效，请登录后再试'
        })
    }
});
router.get('/artical',(req,res) => {
    if(req.session.user){
        articalModel.find().sort({_id:-1}).then( data => {
            res.json({
                code:200,
                data
            })
        })

    }else {
        res.json({
            code:403,
            mag:'请登录之后再试'
        })
    }
})
router.get('/artical/:id',(req,res) => {
    const {id } = req.params

    articalModel.findById(id).then( data => {
        res.json({
            code:200,
            data
        })
    })
})

module.exports = router
