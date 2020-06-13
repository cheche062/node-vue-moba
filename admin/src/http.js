import axios from 'axios'
import Vue from 'vue'
import router from './router/index'


const http = axios.create({
  // 把服务地址动态化(开发时则指向本地该配置地址，生产时则指向生产的地址会使用后面一个)
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use((config) => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

// 通用错误处理
http.interceptors.response.use((res) => {
  return res
}, (err) => {
  Vue.prototype.$message({
    type: 'error',
    message: err.response.data.message
  })

  if (err.response.status == 401) {
    router.push('/login')
  }

  return Promise.reject(err)
})

export default http