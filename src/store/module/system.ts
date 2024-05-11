import { atom } from "recoil"
import { globalStorage } from "@/constant/storage"
import { SystemLanguage } from "@/constant/system"
import { getAppEnv } from "@/utils"
import { Message } from "@arco-design/web-react"
import { createIntl, createIntlCache } from "react-intl"
import loadLocale from "@/lib/intl"

export const locale = atom<SystemLanguage>({
    key: "locale",
    default: SystemLanguage.cn,
    effects: [
        ({ onSet }) => {
            onSet((value) => {
                globalStorage.set("language", value)
                globalStorage.set(getAppEnv().VITE_APP_LANGUAGE_KEY, value)
                if (value) {
                    loadLocale(value).then(({ mapping, locale }) => {
                        const cache = createIntlCache()
                        const intl = createIntl(
                            {
                                locale,
                                messages: mapping!,
                            },
                            cache,
                        )
                        const label = value === SystemLanguage.cn ? "中文" : "English"
                        const msg = `${intl.formatMessage({
                            id: "system.language.switch",
                        })}${label}`
                        Message.info(msg)
                    })
                }
            })
        },
    ],
})