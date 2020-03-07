module.exports = (app) => {
  const router = require('express').Router()

  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')

  // 自动插入一些文章数据
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent
    }).lean()

    const newsTitles = ["【虎牙大腿杯S3】玩法升级，火热开战！", "体验服爆料丨全新玩法万镜觉醒，爽快翻5倍！", "新皮肤爆料丨白蛇再临西子湖畔，只为赴你千年之约！", "新星元部件爆料丨渐变马尾&amp;白金战服！伽罗换装出击~", "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光", "王者营地登陆异常问题说明", "3月3日全服不停机更新公告", "3月6日体验服停机更新公告", "大乔-白蛇皮肤个人主页界面展示异常说明", "关于部分召唤师充值失败说明公告", "峡谷女神节 福利大集结", "【稷下修学游】活动公告", "伽罗星元上新 多重福利来袭", "峡谷来相聚 初春有好礼", "创意互动营-云中君皮肤设计大赛投票开启", "高校联赛女神挑战赛周末开赛啦！来看高颜值组合强强联手", "你和那个TA会是峡谷校园最佳CP吗？高校联赛白色情人节开启CP大作战！", "王者荣耀大众赛事将迎来全面升级", "赛事体验全面升级，重大改版细节抢先看", "2020年KPL春季赛常规赛赛程公布"]

    const newsList = newsTitles.map((title) => {
      const randomCats = cats.slice(0).sort((a, b) => {
        return Math.random() - 0.5
      })
      return {
        title,
        categories: randomCats.slice(0, 2)
      }
    })

    await Article.deleteMany({})
    await Article.insertMany(newsList)

    res.send(JSON.stringify(newsList, null, 4))
  })


  router.get('/news/list', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    }).populate({
      path: 'children',
      populate: {
        path: 'newsList'
      }
    }).lean()

    res.send(parent)
  })

  app.use('/web/api', router)

}