import Vue from 'vue'
import router  from '../router'
import axios from 'axios'
import utils from './utils.js'
import qs from "qs"
const service = axios.create({
  baseURL: window.location.href.split('.')[1] !== undefined ? `//api.${window.location.href.split('.')[1]}.com/api` : '//api.yunjiittest.com/api'//it正式

})
// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log('requestError: ', error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
