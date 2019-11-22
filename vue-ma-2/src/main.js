import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import HomePage from "./homePage.vue"
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        }
    ]
})

//Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
