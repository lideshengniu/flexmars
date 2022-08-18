import { createApp } from "vue"
import App from "./App.vue"
import store from "@mars/widget-store"
import { injectState, key } from "@mars/common/store/widget"
import MarsUIInstall from "./marsgis/install/index"
import { registerGlobcomp } from "./utils/registerGlobComp"
import router from "./router"
import "./styles/index.less"
import { createPinia } from "pinia"

const store2 = createPinia()

createApp(App).use(injectState(store), key).use(MarsUIInstall).use(store2).use(router).use(registerGlobcomp).mount("#app")
