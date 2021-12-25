import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// Create a router
const Router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

export default Router;