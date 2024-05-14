import { appEnv } from "@/constant/system"
import { SystemLocaleMapping } from ".."

// 按照页面路由划分[pathname.var]:value
const zhCN: SystemLocaleMapping = {
    [appEnv.VITE_APP_TITLE]: appEnv.VITE_APP_TITLE,
    "system.language.switch": "为您切换到{locale}",
}

export default zhCN
