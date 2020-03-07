const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  name: {type: String},
  parent: {type: moogoose.SchemaTypes.ObjectId, ref: 'Category'}
})

schema.virtual('children', {
  localField: '_id',
  ref: 'Category',
  foreignField: 'parent',
  justOne: false
})
schema.virtual('newsList', {
  localField: '_id',
  ref: 'Article',
  foreignField: 'categories',
  justOne: false
})


module.exports = moogoose.model('Category', schema)