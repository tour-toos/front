import { lazy, Suspense } from "solid-js"
import { render } from "solid-js/web"
import { Router } from "@solidjs/router"
import "./index.css"
import {
    ColorModeProvider,
    ColorModeScript,
    createLocalStorageManager,
} from "@kobalte/core"

const routes = {
    path: "/",
    component: lazy(() => import("./App")),
}

render(() => {
    const storageManager = createLocalStorageManager("vite-ui-theme")
    return (
        <Router
            root={props => (
                <>
                    <ColorModeScript storageType={storageManager.type} />
                    <ColorModeProvider storageManager={storageManager}>
                        <Suspense>{props.children}</Suspense>
                    </ColorModeProvider>
                </>
            )}
        >
            {routes}
        </Router>
    )
}, document.getElementById("root")!)
