import { createApp } from 'vue'
// import App from './App.vue'
import App2 from './App.vue'
import router from './router'


createApp(App2)
    .use(router)
    .mount("#app");
