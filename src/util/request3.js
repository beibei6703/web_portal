import axios from 'axios'
const service = axios.create({
  baseURL: window.location.href.split('.')[1] !== undefined ? `//api.${window.location.href.split('.')[1]}.com/hrm` : '//api.yunjiittest.com/hrm'//it正式
});
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
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
