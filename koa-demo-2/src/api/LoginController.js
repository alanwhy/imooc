import send from '../config/MailConfig'
import moment from 'moment'
import jsonwebtoken from "jsonwebtoken"
import config from "./../config/index"
import { checkCode } from "./../common/utils"
import User from "./../model/User"

class LoginController {
  constructor() { }
  async forget(ctx) {
    const { body } = ctx.request
    // console.log(body)
    try {
      // body.username -> database -> email
      let result = await send({
        code: '1234',
        expire: moment()
          .add(30, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Brian',
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功',
      }
    } catch (e) {
      console.log(e)
    }
  }

  async login(ctx) {
    // 接收用户的数据
    const { body } = ctx.request
    let sid = body.sid
    let code = body.code
    // 验证图片验证码的时效性、正确性
    let result = await checkCode(sid, code)
    if (result) {
      // 验证用户账号密码是否正确
      let checkUserPasswd = false
      let user = await User.findOne({ username: body.username })
      if (user.password === body.password) {
        checkUserPasswd = true
      }
      // mongoDB查库
      if (checkUserPasswd) {
        // 验证通过 返回token
        console.log("check ok");
        // let token = jsonwebtoken.sign({ _id: "brian", exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24) }, config.JWT_SECRET)
        let token = jsonwebtoken.sign({ _id: "brian" }, config.JWT_SECRET, {
          expiresIn: "1d"
        })
        ctx.body = {
          code: 200,
          token
        }
      } else {
        // 验证失败 返回提示
        ctx.body = {
          code: 404,
          msg: "用户名或密码错误"
        }
      }
    } else {
      ctx.body = {
        code: 401,
        msg: "图片验证码不正确"
      }
    }

  }
}

export default new LoginController()
