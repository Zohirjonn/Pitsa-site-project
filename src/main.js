import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueTheMask from "vue-the-mask";

import "./style.css";
const app = createApp(App);
app.use(VueTheMask);
app.use(store).use(router).mount("#app");
