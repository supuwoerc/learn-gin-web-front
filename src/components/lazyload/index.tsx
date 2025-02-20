import LoadingFallback from "@/components/loadingFallback"
import { Suspense } from "react"

function lazyload(
    Component: React.LazyExoticComponent<any>,
    fallback = <LoadingFallback />,
): React.ReactNode {
    return (
        <Suspense fallback={fallback}>
            <Component />
        </Suspense>
    )
}

export default lazyload
