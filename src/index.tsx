import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css"

const routes = {
    path: "/",
    component: lazy(() => import("./App")),
}


render(() => <Router>{routes}</Router>, document.getElementById("root")!);