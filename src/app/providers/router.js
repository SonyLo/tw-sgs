import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '@/pages/FormPage.vue';
import ResultPage from '@/pages/ResultPage.vue';

const routes = [
	{ path: '/', component: FormPage },
	{ path: '/result', component: ResultPage }
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});
