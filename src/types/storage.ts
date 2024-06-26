import { SystemLocale } from "@/constant/system"

export interface StorageState {
    token: string
    refreshToken: string
    language: SystemLocale
    collapse: string
    theme: string
}
