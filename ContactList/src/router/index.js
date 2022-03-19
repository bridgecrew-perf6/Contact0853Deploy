/*
    index.js 
*/

import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../views/UserLogin.vue'
import Home from '../views/Home.vue'
import FunctionEdit from '../views/FunctionEdit.vue'
import FunctionCreate from '../views/FunctionCreate.vue'


const routes = [
    {
        // route to loginpage if this is entered "http://localhost:3000/"
        path: '/',
        redirect: '/Userlogin'
    },

    {
        // route to UserLogin if this is entered "http://localhost:3000/UserLogin"
        path: '/UserLogin',
        name: 'UserLogin',
        component: UserLogin
    },

    {
        // route to contactpage- home if this is entered "http://localhost:3000/Home"
        path: '/Home',
        name: 'Home',
        component: Home,
        
    },

    {
        // route to edit contactpage if this is entered "http://localhost:3000/FunctionEdit"
        path: '/FunctionEdit/:id',
        name: 'FunctionEdit',
        component: FunctionEdit
    },
    
    {
        // route to FunctionCreate if this is entered "http://localhost:3000/FunctionCreate"
        path: '/FunctionCreate',
        name: 'FunctionCreate',
        component: FunctionCreate
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router