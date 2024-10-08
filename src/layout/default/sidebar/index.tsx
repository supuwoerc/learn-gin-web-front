import { Menu } from "@arco-design/web-react"
import { IconApps } from "@arco-design/web-react/icon"
import SidebarContainer from "./sidebar-container"
import { FormattedMessage } from "react-intl"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CustomRouteObject } from "@/types/routes"
import Logo from "@/components/logo"
import { useRecoilValue } from "recoil"
import { system } from "@/store"
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
interface SidebarProps {
    routePath: CustomRouteObject[]
    menuRoutes: CustomRouteObject[]
}
const Sidebar: React.FC<SidebarProps> = ({ routePath, menuRoutes }) => {
    const navigate = useNavigate()
    const sidebarCollapsed = useRecoilValue(system.sidebarCollapsed)
    const selectedKeys = useMemo(() => {
        const keys = (routePath ?? []).map((item) => item.path ?? "").filter(Boolean)
        return keys
    }, [routePath])
    const [openKeys, setOpenKeys] = useState<Array<string>>(selectedKeys.slice(0, -1))
    const onClickMenuItemHandle = (key: string) => {
        navigate(key)
    }
    const onClickSubMenuHandle = (_key: string, openKeys: string[]) => {
        setOpenKeys(openKeys)
    }
    return (
        <SidebarContainer>
            <Logo
                color={"var(--color-text-1)"}
                style={{ height: 60, width: "100%", justifyContent: "center" }}
                onlyLogo={sidebarCollapsed}
            />
            <Menu
                style={{ height: "calc(100% - 60px)" }}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onClickMenuItem={onClickMenuItemHandle}
                onClickSubMenu={onClickSubMenuHandle}
            >
                {menuRoutes.map((item) => {
                    return (
                        <SubMenu
                            key={item.path!}
                            title={
                                <>
                                    {item.meta?.icon ?? <IconApps />}
                                    <FormattedMessage id={item.meta?.title} />
                                </>
                            }
                        >
                            {item.children &&
                                item.children.map((sub) => {
                                    return (
                                        <MenuItem key={sub.path!}>
                                            {sub.meta?.title ? (
                                                <FormattedMessage id={sub.meta?.title} />
                                            ) : null}
                                        </MenuItem>
                                    )
                                })}
                        </SubMenu>
                    )
                })}
            </Menu>
        </SidebarContainer>
    )
}
export default Sidebar
