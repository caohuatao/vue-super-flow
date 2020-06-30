import Vue from 'vue'
import App from './App'
import SuperFlow from '../packages/index'

Vue.use(SuperFlow)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
