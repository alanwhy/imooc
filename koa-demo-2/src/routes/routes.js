import combineRoutes from "koa-combine-routers"
import demoRouter from "./demoRouter"
import publicRouter from "./publicRouter"

export default combineRoutes(demoRouter, publicRouter)
