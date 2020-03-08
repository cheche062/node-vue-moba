const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  name: {type: String},
  avatar: {type: String},
  banner: {type: String},
  title: {type: String},
  categories: [{type: moogoose.SchemaTypes.ObjectId, ref: 'Category'}],
  scores: {
    difficult: {type: Number},
    skills: {type: Number},
    attack: {type: Number},
    survive: {type: Number},
  },
  skills: [{
    icon: {type: String},
    name: {type: String},
    description: {type: String},
    tips: {type: String},
  }],
  items1: [{type: moogoose.SchemaTypes.ObjectId, ref: 'Item'}],
  items2: [{type: moogoose.SchemaTypes.ObjectId, ref: 'Item'}],

  usageTips: {type: String},
  battleTips: {type: String},
  teamTips: {type: String},
  partners: [{
    hero: {type: moogoose.SchemaTypes.ObjectId, ref: 'Hero'},
    description: {type: String}
  }]

})




// 建议加上第三个参数指定 该数据表的名称一般是复数
module.exports = moogoose.model('Hero', schema, 'heroes')