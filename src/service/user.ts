import defaultClient, { refreshTokenClient } from "@/constant/axios"
import { UserInfo, UserInfoDept, UserInfoRole } from "@/types/user"

export interface LoginRequest {
    email: string
    password: string
}

export interface SignupRequest extends LoginRequest {
    id: string
    code: string
}
export interface LoginResponse {
    refresh_token: string
    token: string
    user: LoginResponseUser
}

export interface LoginResponseUser {
    id: number
    nickname: string | null
    email: string
}

export interface RefreshTokenResponse {
    data: {
        refresh_token: string
        token: string
    }
    code: number
    message: string
}

const signup = (params: SignupRequest) => defaultClient.post<null>("/public/user/signup", params)

const login = (params: LoginRequest) =>
    defaultClient.post<LoginResponse>("/public/user/login", params)

const getUserInfo = () => defaultClient.get<UserInfo>("/user/profile")

const refreshToken = () =>
    refreshTokenClient.get<{ data: RefreshTokenResponse }>("/user/refresh-token")

export interface GetUserListRequest extends PageRequest {
    keyword?: string
}
export interface UserListRow {
    id: number
    nickname: string | null
    created_at: string
    updated_at: string
    about: string | null
    avatar: string | null
    birthday: string | null
    departments: UserInfoDept[]
    gender: number | null
    roles: UserInfoRole[]
}

const getUserList = (params: GetUserListRequest) =>
    defaultClient.get<PageResponse<UserListRow>>("/user/list", { params })

export default {
    signup,
    login,
    getUserInfo,
    refreshToken,
    getUserList,
}
