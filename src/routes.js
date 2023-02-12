import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue";
import AddRestuarant from "./components/AddRestuarant.vue";
import UpdateRestuarant from "./components/UpdateRestuarant.vue";


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: HomePage,
        path: '/'
    },
    {
        name: 'Signup',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: LoginPage,
        path: '/login'
    },
    {
        name: "AddRestuarant",
        component: AddRestuarant,
        path: "/add-restuarant"
    },
    {
        name: "UpdateRestuarant",
        component: UpdateRestuarant,
        path: "/update-restuarant/:id",
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes

})
export default router