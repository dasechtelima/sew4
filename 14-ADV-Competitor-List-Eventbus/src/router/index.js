import {createRouter, createWebHistory} from 'vue-router'
import CompetitorListView from "@/views/CompetitorListView.vue";
import SingleCompetitorView from "@/views/SingleCompetitorView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'List',
            component: CompetitorListView
        },
        {
            path: '/comp/:uuid',
            name: 'comp:uuid',
            component: SingleCompetitorView
        }
    ]
});

export default router;
