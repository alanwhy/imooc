import axios from '@/utils/request'


/**
 * 获取验证码接口
 * @param {*} sid 唯一标识 
 */
const getCode = async (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid
    }
  })
}

/**
 * 找回密码接口
 * @param {*} option 用户信息（邮箱等）
 */
const forget = option => {
  return axios.post('/forget', {
    ...option
  })
}

/**
 * 登录接口
 * @param {*} loginInfo 用户登录信息
 */
const login = (loginInfo) => {
  return axios.post('/login', {
    ...loginInfo
  })
}

export { getCode, forget, login }
