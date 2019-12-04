import Vue from 'vue'
import router  from '../router'
import axios from 'axios'
import utils from './utils.js'
import qs from "qs"
const service = axios.create({
  // baseURL: "http://sso.api.com",//it
  // baseURL:`//sso.${window.location.href.split('.')[1]}.com`,//it
  baseURL: window.location.href.split('.')[1] !== undefined ? `//sso.${window.location.href.split('.')[1]}.com` : '//sso.yunjiittest.com'
  // baseURL: "http://10.1.0.76:9995",
  // baseURL: "http://10.1.0.86:9989",//公告?
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
// export default (url, method, data, headers) => {
//   if (url.indexOf('/app') != '-1') {
//     axios.defaults.baseURL = 'http://10.1.0.86:9995/';

//   }else if(url.indexOf('pc/apiList') != '-1'){
//     axios.defaults.baseURL = 'http://10.1.0.86:9989/';
//   }else{
//     axios.defaults.baseURL ="http://10.1.0.76:9995/"
//   };
//   return axios(Object.assign({
//     url: url,
//     method: method,
//     headers
//   }, method == 'GET' ? { params: data } : { data:qs.stringify(data) }));
// };

export default service
