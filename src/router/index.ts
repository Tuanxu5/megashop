import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue';
import DetailProduct from '../components/DetailProduct.vue';
import CartPage from '../components/CartPage.vue';
const routes = [
    { path: '/megashop/', component: HomePage },
    { path: '/megashop/detail-product/:id', component: DetailProduct,name: 'detailProduct'},
    { path: '/megashop/cart',component: CartPage}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router