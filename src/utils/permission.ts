import { CustomRouteObject } from "@/types/routes"
import { UserInfo } from "@/types/user"

/**
 * 根据用户角色过滤出有权限的路由树(用于菜单展示)
 * @param user 当前登录人
 * @param routes 完整树状路由
 * @returns 有权限的路由tree
 */
export function getMenuRoutes(user: UserInfo, routes: CustomRouteObject[]): CustomRouteObject[] {
    const { roles: userRoles = [] } = user
    return routes.filter((route) => {
        const isNotNeedAuth = !route.meta?.auth || (route.meta.roles ?? []).length === 0
        const routeNeedRoles = route.meta?.roles ?? []
        const roleIsExist = routeNeedRoles.some((item) => userRoles.includes(item))
        const childFilterResult = getMenuRoutes(user, route.children ?? [])
        const existPermission = isNotNeedAuth || roleIsExist || childFilterResult.length > 0
        if (existPermission) {
            route.children = childFilterResult
        }
        return existPermission
    })
}

/**
 * 根据用户角色过滤出有权限的路由树,但是无权限的路由将被替换为403(系统真实路由表)
 * @param user 当前登录人
 * @param routes 完整树状路由
 * @returns 有权限的路由tree
 */
export function getPermissionRoutes(
    user: UserInfo,
    routes: CustomRouteObject[],
    forbidden: React.ReactNode,
): CustomRouteObject[] {
    const { roles: userRoles = [] } = user
    return routes.map((route) => {
        const isNotNeedAuth = !route.meta?.auth || (route.meta.roles ?? []).length === 0
        const routeNeedRoles = route.meta?.roles ?? []
        const roleIsExist = routeNeedRoles.some((item) => userRoles.includes(item))
        const existPermission = isNotNeedAuth || roleIsExist
        if (!existPermission) {
            route.element = forbidden
        }
        const childReplaceResult = getPermissionRoutes(user, route.children ?? [], forbidden)
        route.children = childReplaceResult
        return route
    })
}
