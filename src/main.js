import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './lib/store.js'

import vue3GoogleLogin from 'vue3-google-login'


const app = createApp(App);
app.use(router);
app.use(store);
app.use(vue3GoogleLogin, { clientId: 'CLEEPRIVEE' });
app.mount('#app');
