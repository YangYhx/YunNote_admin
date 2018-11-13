const mongoose = require('mongoose');

let artical = new mongoose.Schema({
    author: String,
    title: {
        type: String,
        index: 1
    },
    content: String,
    contentText: String,
    looknums: {
        type: Number,
        default: 0,
    },
    commontnums: {
        type: Number,
        default: 0
    },
    category: String,
    avatar:String

},{ versionKey: false,timestamps:{createAt:'createTime',updataAt:'updataTime'}});

module.exports = mongoose.model('artical',artical)