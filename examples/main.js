import Vue from 'vue'
import App from './demo-samll.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
