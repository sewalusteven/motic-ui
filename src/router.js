import {  createRouter, createWebHistory } from 'vue-router'


import MainLayout from "./layout/MainLayout.vue";
import Home from "./pages/Home.vue";
import BusinessRegistration from "./pages/BusinessRegistration.vue";
import AuthLayout from "./layout/AuthLayout.vue";
import Login from "./pages/auth/Login.vue";
import Permits from "./pages/Permits.vue";
import Cooperatives from "./pages/landing-pages/Cooperatives.vue";
import Licenses from "./pages/landing-pages/Licenses.vue";
import Msme from "./pages/landing-pages/Msme.vue";
import Registry from "./pages/Registry.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "",
                name: "home",
                component: Home,
            },
            {
                path: "cooperatives",
                name: "cooperatives",
                component: Cooperatives,
            },
            {
                path: "licenses",
                name: "licenses",
                component: Licenses,
            },
            {
                path: "msme",
                name: "msme",
                component: Msme,
            },
            {
                path: "registry",
                name: "registry",
                component: Registry,
            },
            {
                path: "business-registration",
                name: "business-registration",
                component: BusinessRegistration,
            },
            {
                path: "permits",
                name: "permits",
                component: Permits
            }
        ]
    },
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            {
                path: "login",
                name: "login",
                component: Login
            },
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})