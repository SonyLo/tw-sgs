import { createApp } from 'vue';
import App from './App.vue';
import { router } from './app/providers/router';
import { createPinia } from 'pinia';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');