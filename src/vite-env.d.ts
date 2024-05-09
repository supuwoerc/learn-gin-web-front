/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_ENV: string
    readonly VITE_APP_TOKEN_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
