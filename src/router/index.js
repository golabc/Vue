import {createRouter, createWebHashHistory} from 'vue-router'
import AppHome from "@/components/AppHome";

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/person',
        name: 'personManagement',
        component: () => import('../components/person/PersonManagement'),
        children: [
            {

                path: '/:id'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
