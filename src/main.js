import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueSimpleAccordion from 'vue-simple-accordion'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-simple-accordion/dist/vue-simple-accordion.css'

import App from './App.vue'

Vue.use(VueSimpleAccordion, {
  // ... Options go here
})
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
