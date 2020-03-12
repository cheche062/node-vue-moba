const express = require('express')
const app = express()

app.set('secret', 'asd3434sdsegg')
app.use(require('cors')())
app.use(express.json())


// 静态文件托管可直接访问
app.use('/', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)



app.listen(3000, () => {
  console.log('http://localhost:3000')
})