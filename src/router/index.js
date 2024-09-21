import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/mainView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: mainView
        },
        {
            path: '/skills',
            name: 'skills',
            component: mainView
        },
        {
            path: '/resume',
            name: 'resume',
            component: mainView
        },
        {
            path: '/projects',
            name: 'projects',
            component: mainView
        },
    ]
})

export default router
