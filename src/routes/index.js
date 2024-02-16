// routes/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/components/homepage.vue';
import ConversationsIndexPage from '@/components/conversationsindexpage.vue';

const routes = [
    {
        path: '/',
        component: Homepage,
    },
    {
        path: '/conversations',
        component: ConversationsIndexPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
