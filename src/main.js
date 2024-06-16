import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from 'axios'  // 引入 axios

const app = createApp(App)

// 将 axios 添加到 Vue 实例的原型链中
app.config.globalProperties.axios = axios;

app.use(router).mount("#app")
