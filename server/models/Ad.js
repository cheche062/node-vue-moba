const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  name: {type: String},
  items: [{
    image: {type: String},
    url: {type: String}
  }],

})





module.exports = moogoose.model('Ad', schema)