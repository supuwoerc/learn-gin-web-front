/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_ENV: string
    readonly VITE_APP_TOKEN_KEY: StorageState["token"]
    readonly VITE_APP_REFRESH_TOKEN_KEY: StorageState["refreshToken"]
    readonly VITE_APP_LOCALE_KEY: StorageState["language"]
    readonly VITE_APP_DEFAULT_SERVER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
