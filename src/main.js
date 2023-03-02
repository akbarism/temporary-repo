import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { globalcomponent } from "./plugins/globalComponent.js";
const app = createApp(App);
globalcomponent(app);

app.mount("#app");
