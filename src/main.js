import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import Default from './layout/Default.vue'
import NoHeaderFooter from './layout/NoHeaderFooter.vue'

Vue.component('default-layout', Default)
Vue.component('no-header-footer-layout', NoHeaderFooter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
