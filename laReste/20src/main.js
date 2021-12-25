import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})