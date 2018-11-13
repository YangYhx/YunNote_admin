var express = require('express');
var router = express.Router();
const user = require('../controller/user')
const category = require('../controller/catagray')
const artical = require('../controller/artical')

/* GET home page. */
router.use(user);
router.use(category);
router.use(artical);
router.get('/',(req,res)=>{
    res.render('index')
})

module.exports = router;
