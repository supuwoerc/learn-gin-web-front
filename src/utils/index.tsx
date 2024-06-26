import { SystemLocaleMapping } from "@/lib/intl"
import { createIntl, createIntlCache } from "react-intl"

/**
 * @description 获取vite环境变量
 * @returns vite环境变量值
 */
export function getAppEnv() {
    return import.meta.env
}

/**
 * 休眠函数
 * @param s 休眠秒数
 * @returns Promise<void>
 */
export function sleep(s: number) {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve()
        }, s * 1000)
    })
}

/**
 * 获取intl实例
 * @param locale 语言key
 * @param messages 语言映射
 * @returns
 */
export function getIntl(locale: string, messages: SystemLocaleMapping) {
    const cache = createIntlCache()
    const intl = createIntl(
        {
            locale,
            messages,
        },
        cache,
    )
    return intl
}
