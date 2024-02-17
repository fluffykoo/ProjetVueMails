import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/components/homepage.vue';
import ConversationsIndexPage from '@/components/boitedereception.vue';
import SentEmails from '@/components/SentEmails.vue';
const routes = [
    {
        path: '/',
        component: Homepage,
    },
    {
        path: '/conversations',
        component: ConversationsIndexPage,
    },
    {
        path: '/sent',
        component: SentEmails,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
