import {createApp} from 'vue'
import "~/styles/reset.less";
import App from './views/App.vue'
import {createPinia} from 'pinia'
import Vue3PhotoPreview from 'vue3-photo-preview'
import {LoadingPlugin} from 'vue-loading-overlay'
import router from "~/router";


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Vue3PhotoPreview)
app.use(LoadingPlugin)
app.mount('#app')
