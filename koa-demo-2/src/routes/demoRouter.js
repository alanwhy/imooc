import koaRouter from "koa-router"
import demoController from "../api/demoController"
const router = new koaRouter()

router.get("/demoController", demoController.demo)

module.exports = router