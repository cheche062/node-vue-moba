module.exports = {
  //指定打包后的输出路径
  outputDir: __dirname + '/../server/admin',
  // 公共的引用路径（和上边输出路径的admin是一致的）
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/'
}