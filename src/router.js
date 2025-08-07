import { createMemoryHistory, createRouter } from 'vue-router'


import MainLayout from "./layout/MainLayout.vue";
import Home from "./pages/Home.vue";
import BusinessRegistration from "./pages/BusinessRegistration.vue";

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
                path: "business-registration",
                name: "business-registration",
                component: BusinessRegistration,
            },
        ]
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})