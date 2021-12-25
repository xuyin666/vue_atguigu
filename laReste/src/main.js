import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import { Button, Row, DatePicker } from 'element-ui';

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
})