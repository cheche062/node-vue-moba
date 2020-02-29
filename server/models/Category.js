const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  name: {type: String},
  parent: {type: moogoose.SchemaTypes.ObjectId, ref: 'Category'}
})





module.exports = moogoose.model('Category', schema)