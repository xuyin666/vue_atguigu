import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// Create a router
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {title: 'guanyu'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: 'zhuye'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: 'xinwen'}
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: 'xiaoxi'},
                    children: [
                        {
                            name: 'xiangqing',
                            path : 'detail',
                            // path : 'detail/:id/:title',
                            component: Detail,
                            meta: {isAuth: true, title: 'xiangqing'},
                            // props
                            // props: {a: 1, b: 'hello'},
                            // props: true,

                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }

                            // props({query}) {
                            //     return {
                            //         id: query.id,
                            //         title: query.title
                            //     }
                            // }

                            // props({query: {id, title}}) {
                            //     return {
                            //         id,
                            //         title
                            //     }
                            // }
                        }
                    ]
                }
            ]
        }
    ]
})


router.beforeEach((to, from, next) => {
    console.log('qian zhi@', to, from);
    // console.log(to);
    // console.log(from);


    if (to.meta.isAuth) {
    // if(to.name === 'xinwen' || to.name === 'xiaoxi') {
    // if(to.path === '/home/news' || to.path === '/home/message') {
        if(localStorage.getItem('school') === 'atguigu') {
            next();
        } else {
            alert('School name is not correct, no right')
        }
    } else {
        next()
    }
});

router.afterEach((to, from) => {
    document.title = to.meta.title || 'atguigu'
    console.log('hou zhi@', to, from);
})

export default router;