import combineRoutes from "koa-combine-routers"
import demoRouter from "./demoRouter"
import publicRouter from "./publicRouter"
import loginRouter from './loginRouter'

export default combineRoutes(demoRouter, publicRouter, loginRouter)
