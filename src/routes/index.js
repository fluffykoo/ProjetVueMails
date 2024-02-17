
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/components/homepage.vue';
import ConversationsIndexPage from '@/components/conversationsindexpage.vue';
import ComposeEmail from '@/components/ComposeEmail.vue';
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
        path: '/compose',
        component: ComposeEmail,
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
