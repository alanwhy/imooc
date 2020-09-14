// const koa = require("koa")
// const path = require('path')
// const routes = require("./routes/routes")
// const helmet = require("koa-helmet")
// const statics = require("koa-static")

import koa from "koa"
import path from "path"
import routes from "./routes/routes"
import helmet from "koa-helmet"
import statics from "koa-static"
import koaBody from "koa-body"
import jsonUtil from "koa-json"
import cors from "@koa/cors"
// 整合koa的中间件
import compose from 'koa-compose'

const app = new koa()

const middleware = compose([
  koaBody(),
  cors(),
  statics(path.join(__dirname, '../public')),
  helmet(),
  jsonUtil({ pretty: false, param: 'pretty' })
])

// 安全的头部信息
// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))
app.use(middleware)
app.use(routes())

app.listen(3000)