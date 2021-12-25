import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'


Vue.config.productionTip = false

//use plugins
Vue.use(plugins)

new Vue({
    el: '#app',
    render: h => h(App)
})