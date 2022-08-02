import {createApp} from 'vue'
import App from './App.vue'
import i18n from './i18n'
import EntityManager from '@/common/entityManager'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
// import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const app = createApp(App);
app.use(router);
// app.use(VueToast,{
//     position: "bottom",
//     duration: 3000,
//     queue: true
// });
app.use(VueAxios, axios).use(i18n).provide('entityManager', new EntityManager()).mount('#app')

export default app;