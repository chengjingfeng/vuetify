import Vue from 'vue'
import Playground from './Playground.vue'
import Vuetify from 'vuetify'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

// Vue.config.performance = true

Vue.use(Vuetify)

const vuetify = new Vuetify()

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  vuetify,
  router,
  render (h) {
    return this.isLoaded ? h(Playground) : undefined
  }
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})
