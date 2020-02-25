const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  name: {type: String}
})





module.exports = moogoose.model('Category', schema)