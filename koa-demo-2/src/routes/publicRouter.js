import koaRouter from "koa-router"
import publicController from "../api/PublicController"
const router = new koaRouter()

router.prefix("/public")
router.get("/getCaptcha", publicController.getCaptcha)

module.exports = router