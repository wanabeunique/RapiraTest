import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import './style.css'
import 'vue-final-modal/style.css'
import router from "./router.ts";
import App from './App.vue'

const vfm =createVfm()

createApp(App)
    .use(router)
    .use(vfm)
    .mount('#app')
