const koa = require("koa")
const path = require('path')
const routes = require("./routes/routes")
const helmat = require("koa-helmet")
const static = require("koa-static")

const app = new koa()

// 安全的头部信息
app.use(helmat())
app.use(static(path.join(__dirname, '../public')))
app.use(routes())

app.listen(3000)