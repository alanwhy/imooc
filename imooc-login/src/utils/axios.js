// 封装axios的请求 返回重新封装的数据格式
// 对错误的统一处理
import axios from "axios"
import errorHandle from "./errorHandle"

class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  // 获取axios的配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      timeout: 10000,
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      // withCredentials: false, // default
    }
    return config
  }

  // 设定拦截器
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      // Do something before request is sent
      return config;
    }, (err) => {
      // Do something with request error
      errorHandle(err)
      return Promise.reject(err);
    });

    // 响应拦截器
    instance.interceptors.response.use((res) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (err) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      errorHandle(err)
      return Promise.reject(err);
    });
  }

  // 创建实例
  request(options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    // return instance.request(newOptions)
    return instance(newOptions)
  }

  get(url, config) {
    const options = Object.assign({
      method: "get",
      url
    }, config)
    return this.request(options)
  }

  post(url, data) {
    return this.request({
      method: "post",
      url,
      data
    })
  }
}

export default HttpRequest