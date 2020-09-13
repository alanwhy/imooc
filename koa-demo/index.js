const Koa = require('koa')
const Router = require("koa-router")
const cors = require("@koa/cors")
const koaBody = require("koa-body")
const json = require('koa-json')

const app = new Koa()
const router = new Router()

router.prefix("/api")

router.get("/", ctx => {
  ctx.body = "hello koa"
})

router.get("/api", ctx => {
  const params = ctx.request.query
  ctx.body = {
    name: params.name,
    age: params.age
  }
})

router.get('/async', async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(function () {
      resolve("2000ms")
    }, 2000)
  })
  ctx.body = result
})

router.post('/post', async ctx => {
  let { body } = ctx.request
  // console.log(body)
  // console.log(ctx.request)
  ctx.body = {
    ...body
  }
})

// app.use(async ctx => {
//   // console.log(ctx);
//   // console.log(ctx.request);
//   ctx.body = "hello koa"
// })


app.use(koaBody())
app.use(cors())
// &pretty 进行结果格式化
app.use(json({ pretty: false, param: 'pretty' }))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)