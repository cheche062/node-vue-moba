module.exports = (app) => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })

  // 新建分类
  router.post('/', async function(req, res) {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 编辑修改分类
  router.put('/:id', async function(req, res) {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 获取所有分类
  router.get('/', async function(req, res) {
    const queryOptions = {}
    if (req.Model.modelName == 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)

    res.send(items)
  })

  // 查看分类
  router.get('/:id', async function(req, res) {
    const model = await req.Model.findById(req.params.id)

    res.send(model)
  })

  // 删除分类
  router.delete('/:id', async function(req, res) {
    const model = await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  app.use('/admin/api/rest/:resource', (req, res, next) => {
    const modeName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modeName}`)

    next()
  }, router)


  const multer = require('multer')
  const upload = multer({dest: __dirname + '/../../uploads'})
  // 上传图片
  app.post('/admin/api/upload', upload.single('file'),async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

}