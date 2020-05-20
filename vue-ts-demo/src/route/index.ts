import Vue from 'vue'
import Router from 'vue-router';
import User from '@/view/user.vue'
import Home from '@/view/home.vue'

Vue.use(Router)

const router = new Router({
    scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
    },
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
            // component:() => import('@/view/home.vue')
        },
        {
            path:'/user',
            name:'user',
            component:User
            // component:() => import('@/view/user.vue')
        }
    ]
})

export default router