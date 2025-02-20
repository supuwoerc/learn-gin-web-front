import { useNavigate } from "react-router-dom"
import BeforeEach from "./beforeEach"
import CheckLogin from "./checkLogin"
import RouteView from "./routeView"
import { globalRouter } from "@/constant/system"

const AppRoutes = () => {
    const navigate = useNavigate()
    globalRouter.navigate = navigate
    return (
        <CheckLogin>
            <BeforeEach>
                <RouteView />
            </BeforeEach>
        </CheckLogin>
    )
}
export default AppRoutes
