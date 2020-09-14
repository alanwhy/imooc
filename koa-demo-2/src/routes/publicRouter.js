import koaRouter from "koa-router"
import publicController from "../api/PublicController"
const router = new koaRouter()

router.get("/getCaptcha", publicController.getCaptcha)

module.exports = router