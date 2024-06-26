import { SystemLocaleMapping } from "."
import system from "./cn/system"
import login from "./cn/login"
import router from "./cn/router"

// 按照页面路由划分[pathname.var]:value
const zhCN = {
    ...system,
    ...login,
    ...router,
} as SystemLocaleMapping

export default zhCN
