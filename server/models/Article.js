const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  categories: [{type: moogoose.SchemaTypes.ObjectId, ref: 'Category'}],
  title: {type: String},
  body: {type: String},
}, {
  timestamps: true
})





module.exports = moogoose.model('Article', schema)