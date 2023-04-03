import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import mitt from 'mitt'

// const emitter = mitt() // 单例

// emitter.on('change', () => {
//   console.log('change1')
// })

// emitter.on('change', () => {
//   console.log('change2')
// })

// emitter.emit('change')
// emitter.emit('change')
// emitter.emit('change')

import eventEmitter from 'event-emitter'

const emitter = eventEmitter()

emitter.on('change', (value) => {
  console.log('change1', value)
})

emitter.on('change', () => {
  console.log('change2')
})

emitter.once('change', () => {
  console.log('change3')
})

emitter.emit('change', 'abc')
emitter.emit('change')
emitter.emit('change')

createApp(App).use(store).use(router).mount('#app')
