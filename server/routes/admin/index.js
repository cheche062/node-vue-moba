module.exports = (app) => {
  const express = require('express')
  const AdminUser = require('../../models/AdminUser')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })

  const RELEASE_URL = "test.cheche062.top"
  const router = express.Router({
    mergeParams: true
  })

  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')

  // 新建分类
  router.post('/', authMiddleware(), async function(req, res) {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 编辑修改分类
  router.put('/:id', authMiddleware(), async function(req, res) {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 获取所有分类
  router.get('/', authMiddleware(), async function(req, res) {
    const queryOptions = {}
    if (req.Model.modelName == 'Category') {
      queryOptions.populate = 'parent'
    }
    if (req.Model.modelName == 'Article') {
      queryOptions.populate = 'categories'
    }
    const items = await req.Model.find().setOptions(queryOptions)

    res.send(items)
  })

  // 查看分类
  router.get('/:id', authMiddleware(), async function(req, res) {
    const model = await req.Model.findById(req.params.id)

    res.send(model)
  })

  // 删除分类
  router.delete('/:id', authMiddleware(), async function(req, res) {
    const model = await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  // 资源中间件
  const resourceMiddleware = async (req, res, next) => {
    const modeName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modeName}`)

    next()
  }
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware, router)

  // 上传图片
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async(req, res) => {
    const file = req.file
    file.url = `http://${RELEASE_URL}/uploads/${file.filename}`
    res.send(file)
  })

  // 登录
  app.post('/admin/api/login', async(req, res) => {
    // 用户名是否存在
    const { username, password } = req.body
    const user = await AdminUser.findOne({ username }).select('+password')

    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    // 此处有问题则抛出异常，让全局捕获该异常
    assert(user, 422, '用户不存在')

    // 校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
      // if (!isValid) {
      //   return res.status(422).send({
      //     message: '密码错误'
      //   })
      // }
    assert(isValid, 422, '密码错误')

    // 返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })


  // 全局nodejs捕获错误
  app.use(async(err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}