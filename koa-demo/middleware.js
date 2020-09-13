const Koa = require('koa')

const app = new Koa()

const middleware = function async(ctx, next) {
  console.log('this is a middleware');
  console.log(ctx.request .path);
  next()
}

app.use(middleware)

app.listen(3000)