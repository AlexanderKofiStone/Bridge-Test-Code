import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            result: 0
        }
    }
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app')