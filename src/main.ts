import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'
import Contacts from './views/Contacts.vue'
import ProductDetail from './views/ProductDetail.vue'
import './styles/main.scss'

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/contacts', component: Contacts },
  { path: '/product/:id', component: ProductDetail, name: 'product' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

