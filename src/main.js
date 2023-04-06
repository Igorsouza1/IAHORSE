import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle';

// Importações do FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App)
app.use(router)
app.use(bootstrap)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')


