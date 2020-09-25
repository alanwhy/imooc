import send from '../config/MailConfig'
import moment from 'moment'
import jsonwebtoken from "jsonwebtoken"
import config from "./../config/index"

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
    // 验证图片验证码的时效性、正确性
    // 验证用户账号密码是否正确
    // 返回token
    console.log("hello login");
    // let token = jsonwebtoken.sign({ _id: "brian", exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24) }, config.JWT_SECRET)
    let token = jsonwebtoken.sign({ _id: "brian" }, config.JWT_SECRET, {
      expiresIn: "1d"
    })
    ctx.body = {
      code: 200,
      token
    }
  }
}

export default new LoginController()
