import { createMemoryHistory, createRouter } from 'vue-router'
import List from '@/pages/List/page.vue';

const routes = [
    { path: '/', component: List },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router