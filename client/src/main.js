import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from './plugins/font-awesome'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
  .use(store)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)

app
  .mount('#app')
