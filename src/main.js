import { createApp } from 'vue'
import App from './App.vue'
import flyd from 'fly-design/lib/fly-design.js'
import 'fly-design/lib/style.css'

const app = createApp(App)

app
  .use(flyd)
  .mount('#app')
