import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/home',
            component: () =>
                import ('../views/home.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]

})

export default router;