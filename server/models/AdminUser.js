const moogoose = require('mongoose')

const schema = new moogoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false, //不会被明文查出
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  },
})





module.exports = moogoose.model('AdminUser', schema)