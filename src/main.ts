import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import router from "./router";
import store from "./store";

/* 
Font  Awesome icons

*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
 Bootstrap Css Js
 */

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


createApp(App).use(store).use(router).mount('#app')
