import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBomb)
library.add(faFlag)


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('fa', FontAwesomeIcon)
app.mount('#app')

