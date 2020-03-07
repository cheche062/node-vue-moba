const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set('secret', 'asd3434sdsegg')
app.use(require('cors')())
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)



app.listen(3000, () => {
  console.log('http://localhost:3000')
})