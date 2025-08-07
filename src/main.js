import { createApp } from 'vue'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './style.css'
import App from './App.vue'
import {router} from "./router.js";

createApp(App).use(router).mount('#app')
