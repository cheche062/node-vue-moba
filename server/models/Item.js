const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  name: {type: String},
  icon: {type: String}
})





module.exports = moogoose.model('Item', schema)