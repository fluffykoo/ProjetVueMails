import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './lib/store.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

//test
